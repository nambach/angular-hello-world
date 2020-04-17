import { Component, OnInit } from "@angular/core";
import { PostService } from "../services/post.service";
import { HttpError } from "../common/errors/HttpError";
import { NotFoundError } from "../common/errors/NotFoundError";

@Component({
  selector: "post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent implements OnInit {
  posts: any[];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getAll().subscribe((response) => {
      this.posts = response as any[];
      console.log(this.posts);
    }, (error: HttpError) => {
      alert("Cannot load data from given url " + this.postService.getUrl());
      throw error;
    });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value, id: null };
    input.value = "";

    this.postService.create(post).subscribe((response) => {
      post.id = response["id"];
      this.posts.splice(0, 0, post);
    });
  }

  deletePost(post) {
    this.postService.delete(post.id).subscribe(
      (response) => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: HttpError) => {
        if (error instanceof NotFoundError) {
          alert("Post already deleted.");
        }
      }
    );
  }
}
