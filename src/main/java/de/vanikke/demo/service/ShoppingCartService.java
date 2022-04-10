package de.vanikke.demo.service;

import de.vanikke.demo.data.ShoppingCartRepository;
import de.vanikke.demo.entity.ShoppingCart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class ShoppingCartService {

    private ShoppingCartRepository shoppingCartRepository;

    @Autowired
    ShoppingCartService(ShoppingCartRepository shoppingCartRepository) {
        this.shoppingCartRepository = shoppingCartRepository;
    }

    public List<ShoppingCart> getShoppingCarts() {
        List<ShoppingCart> list = new ArrayList<ShoppingCart>();
        shoppingCartRepository.findAll().forEach(list::add);
        return list;
    }

    public ShoppingCart getShoppingCart(long id) {
        return shoppingCartRepository
                .findById(id).orElse(null);
    }

    public ShoppingCart save(ShoppingCart cart) {
        return shoppingCartRepository.save(cart);
    }
}
