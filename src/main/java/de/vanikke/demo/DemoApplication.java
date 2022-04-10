package de.vanikke.demo;

import de.vanikke.demo.entity.Product;
import de.vanikke.demo.entity.ShoppingCart;
import de.vanikke.demo.service.ProductService;
import de.vanikke.demo.service.ShoppingCartService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Bean
	CommandLineRunner runner(ProductService productService) {
		return args -> {
			productService.save(new Product(1L, "Test Product 1", 11d));
			productService.save(new Product(2L, "Test Product 2", 12d));
			productService.save(new Product(3L, "Test Product 3", 13d));
			productService.save(new Product(4L, "Test Product 3", 14d));
		};
	}
}