package com.boot.blog.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;

@Entity
public class Post {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;
  private String title;
  @Column(columnDefinition="TEXT")
  private String content;
  private String postedDate;
  private String category;

  public Post() {}

  public Post(String p_title, String p_content, String p_postedDate, String p_category) {
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

  public String getPostedDate() {
    return postedDate;
  }

  public String getCategory() {
    return category;
  }
}
