package com.boot.blog.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Post {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;
  private String title;
  private String content;
  private LocalDate postedDate;
  private String category;

  public Post() {}

  public Post(String p_title, String p_content, LocalDate p_postedDate, String p_category) {
    title = p_title;
    content = p_content;
    postedDate = p_postedDate;
    category = p_category;
  }

  public void setId(Long p_id) {
    id = p_id;
  }

  public void setTitle(String p_title) {
    title = p_title;
  }

  public void setContent(String p_content) {
    content = p_content;
  }

  public Long getId() {
    return id;
  }

  public String getTitle() {
    return title;
  }

  public String getContent() {
    return content;
  }
}
