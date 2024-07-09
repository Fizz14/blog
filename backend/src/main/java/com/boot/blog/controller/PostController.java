package com.boot.blog.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;

import com.boot.blog.PostLoader;
import jakarta.annotation.PostConstruct;
import java.io.IOException;

import java.util.List;

import com.boot.blog.model.Post;
import com.boot.blog.repository.PostRepository;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PostController {
  @Autowired
  private PostRepository postRepository;

  @PostConstruct
  public void init() {
    Long baseId = 1L;

    PostLoader myPostLoader = new PostLoader();
    List<Post> posts;

    try {
      posts = myPostLoader.loadPosts("posts.txt");

      //save posts with proper id
      for(Post post : posts) {
        post.setId(baseId);
        baseId++;
        postRepository.save(post);
      }
    } catch (IOException e) {
      e.printStackTrace();
    }


    System.out.println("");
    System.out.println("BlogPostController initialized");
    System.out.println("");
  }

  @GetMapping("/api/posts")
  public List<Post> getAllPosts() {
    System.out.println("");
    System.out.println("Posts were retrieved");
    System.out.println("");

    return postRepository.findAll();
  }

//  @GetMapping
//  public List<Post> getAllPosts() {
//    return postRepository.findAll();
//  }

  @PostMapping
  public Post createPost(@RequestBody Post post) {
    return postRepository.save(post);
  }
}
