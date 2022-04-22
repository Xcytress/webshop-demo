package de.vanikke.demo.service;

import org.junit.jupiter.api.Test;

import java.util.HashMap;

import static org.junit.jupiter.api.Assertions.*;

class FizzBuzzServiceTest {

    @Test
    public void testGetAnswer() {
        HashMap<String, String> testCases = getTestCases();
        FizzBuzzService service = new FizzBuzzService();

        for(String test: testCases.keySet()) {
            assertEquals(service.getAnswer(test), testCases.get(test));
        }
    }

    private HashMap<String,String>getTestCases() {
        HashMap<String, String> testCases =new HashMap<>();
        testCases.put("1", "1");
        testCases.put("2", "2");
        testCases.put("3", "Fizz");
        testCases.put("4", "4");
        testCases.put("5", "Buzz");
        testCases.put("6", "Fizz");
        testCases.put("7", "7");
        testCases.put("8", "8");
        testCases.put("9", "Fizz");
        testCases.put("10", "Buzz");
        testCases.put("11", "11");
        testCases.put("12", "Fizz");
        testCases.put("13", "13");
        testCases.put("14", "14");
        testCases.put("15", "FizzBuzz");
        testCases.put("test", "0");

        return testCases;
    }
}