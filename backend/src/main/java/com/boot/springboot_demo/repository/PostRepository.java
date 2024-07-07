package com.boot.springboot_demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.boot.springboot_demo.model.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
}
