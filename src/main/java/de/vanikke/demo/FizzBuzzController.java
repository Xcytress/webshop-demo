package de.vanikke.demo;

import de.vanikke.demo.entity.Product;
import de.vanikke.demo.service.FizzBuzzService;
import de.vanikke.demo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.NotNull;

@RestController
@RequestMapping("/api/fizzbuzz")
public class FizzBuzzController {

    private FizzBuzzService fizzBuzzServive;

    FizzBuzzController(FizzBuzzService fizzBuzzServive) {
        this.fizzBuzzServive = fizzBuzzServive;
    }

    @GetMapping(value = { "", "/" })
    public String getProducts(@RequestBody String zahl) {
        return fizzBuzzServive.getAnswer(zahl);
    }
}
