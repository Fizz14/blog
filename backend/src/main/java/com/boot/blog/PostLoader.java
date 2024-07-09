package com.boot.blog;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.time.LocalDate;
import com.boot.blog.model.Post;
import org.springframework.core.io.ClassPathResource;

public class PostLoader {

    public List<Post> loadPosts(String filePath) throws IOException {
        List<Post> Posts = new ArrayList<>();
        StringBuilder contentBuilder = new StringBuilder();
        String title = null;
        LocalDate postedDate = null;
        String category = null;

        try (BufferedReader reader = new BufferedReader(new InputStreamReader(
                new ClassPathResource(filePath).getInputStream()))) {
            String line;
            while ((line = reader.readLine()) != null) {
                if (line.startsWith("Title: ")) {
                    if (title != null) {
                        Posts.add(new Post(title, contentBuilder.toString().trim(), postedDate, category));
                        contentBuilder.setLength(0); // Clear the content builder
                    }
                    title = line.substring(7); // Extract the title
                } else if (line.startsWith("Date: ")) {
                    postedDate = LocalDate.parse(line.substring(6)); // Extract the date
                } else if (line.startsWith("Category: ")) {
                    category = line.substring(10); // Extract the category
                } else if (line.equals("---END---")) {
                    if (title != null) {
                        Posts.add(new Post(title, contentBuilder.toString().trim(), postedDate, category));
                        title = null;
                        contentBuilder.setLength(0); // Clear the content builder
                    }
                } else {
                    contentBuilder.append(line).append("\n");
                }
            }
            // Add the last Post if the file doesn't end with the delimiter
            if (title != null) {
                Posts.add(new Post(title, contentBuilder.toString().trim(), postedDate, category));
            }
        }

        return Posts;
    }

}
