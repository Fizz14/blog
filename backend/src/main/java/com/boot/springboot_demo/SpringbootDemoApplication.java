package com.boot.springboot_demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.boot.springboot_demo.*")
@ComponentScan(basePackages = { "com.boot.springboot_demo.*"})
@EntityScan("com.boot.springboot_demo.*")
public class SpringbootDemoApplication {

	public static void main(String[] args) {

    SpringApplication.run(SpringbootDemoApplication.class, args);
    

    System.out.println("");
    System.out.println("Execution begins");
    System.out.println("");
	}

}
