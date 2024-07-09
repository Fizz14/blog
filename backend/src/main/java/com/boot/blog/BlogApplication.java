package com.boot.blog;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.boot.blog.*")
@ComponentScan(basePackages = { "com.boot.blog.*"})
@EntityScan("com.boot.blog.*")
public class BlogApplication {

	public static void main(String[] args) {

    SpringApplication.run(BlogApplication.class, args);
    

    System.out.println("");
    System.out.println("Execution begins");
    System.out.println("");
	}

}
