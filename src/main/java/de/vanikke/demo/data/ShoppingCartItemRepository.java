package de.vanikke.demo.data;

import de.vanikke.demo.entity.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShoppingCartItemRepository extends CrudRepository<Product, Long> {
}
