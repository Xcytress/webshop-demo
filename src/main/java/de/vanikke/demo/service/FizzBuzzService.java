package de.vanikke.demo.service;

import de.vanikke.demo.data.ProductRepository;
import de.vanikke.demo.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class FizzBuzzService {

    public String getAnswer(String zahl) {
        // Vereinfachtes Fehlerhandling für unpassende Eingaben
        if(zahl == null || zahl.isEmpty() || !zahl.matches("[0-9]+"))
            return "0";

        String out = "";
        int num = Integer.valueOf(zahl);

        if((num % 3) == 0 )
            out += "Fizz";

        if((num % 5) == 0 )
            out += "Buzz";

        return out.isEmpty() ? zahl : out;
    }
}
