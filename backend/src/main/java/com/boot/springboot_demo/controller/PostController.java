package com.boot.springboot_demo.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;

//reading from posts.csv
import org.springframework.core.io.ClassPathResource;
import jakarta.annotation.PostConstruct;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.InputStream;
import java.io.IOException;

import java.util.List;

import com.boot.springboot_demo.model.Post;
import com.boot.springboot_demo.repository.PostRepository;


@RestController
//@RequestMapping(path = "/api/posts")
@CrossOrigin(origins = "http://localhost:4200")
public class PostController {
  @Autowired
  private PostRepository postRepository;

  @PostConstruct
  public void init() {
    Long baseId = 1L;
    Integer buflen = 50;
    Integer offset = 0;

    try (BufferedReader reader = new BufferedReader(new InputStreamReader( new ClassPathResource("posts.csv").getInputStream()))) {
      char[] buf;
      while(true) {
        reader.read(buf, offset, buflen);
  
        Post post = new Post();
        post.setId(baseId);
        post.setTitle(buf);
        post.setContent(buf);
        post.Repository.save(post);
        post.getId();
        post.getTitle();
        post.getContent();
        baseId ++;
        offset += buflen;
        if(
      }
      

//      String line;
//      while ((line =  reader.readLine()) != null) {
//        String[] fields = line.split("`");
//        Post post = new Post();
//        post.setId(baseId);
//        post.setTitle(fields[0]);
//        post.setContent(fields[1]);
//        postRepository.save(post);
//        post.getContent();
//        post.getId();
//        System.out.println("Loaded post with title " + post.getTitle());
//        baseId ++;
//
//      }

    } catch (IOException e) {
      e.printStackTrace();

    }


    System.out.println("");
    System.out.println("BlogPostController initialized");
    System.out.println("");
  }

  @GetMapping("/api/posts")
  public List<Post> getAllPosts() {
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
