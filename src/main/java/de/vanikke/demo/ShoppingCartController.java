package de.vanikke.demo;

import de.vanikke.demo.entity.ShoppingCart;
import de.vanikke.demo.service.ShoppingCartService;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotNull;
import java.util.List;

@RestController
@RequestMapping("/api/cart")
public class ShoppingCartController {

    private ShoppingCartService shoppingCartService;

    ShoppingCartController(ShoppingCartService shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
    }

    @GetMapping(value = { "", "/" })
    public @NotNull List<ShoppingCart> getCarts() {
        return shoppingCartService.getShoppingCarts();
    }

    @GetMapping(value = { "/{id}" })
    public @NotNull ShoppingCart getCart(@PathVariable(value="id") Long id) {
        return shoppingCartService.getShoppingCart(id);
    }

    @PutMapping(value = { "", "/" })
    public @NotNull ShoppingCart updateCart(@RequestBody ShoppingCart cart) {
        return shoppingCartService.save(cart);
    }

    @PostMapping(value = { "", "/" })
    public @NotNull ShoppingCart createCart(@RequestBody ShoppingCart cart) {
        return shoppingCartService.save(cart);
    }
}
