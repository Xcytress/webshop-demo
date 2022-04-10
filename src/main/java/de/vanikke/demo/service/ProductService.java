package de.vanikke.demo.service;

import de.vanikke.demo.data.ProductRepository;
import de.vanikke.demo.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class ProductService {

    private ProductRepository productRepository;

    @Autowired
    ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Iterable<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProduct(long id) {
        return productRepository
                .findById(id).orElse(null);
    }

    public Product save(Product product) {
        return productRepository.save(product);
    }
}
