package com.senchacrm.api;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.senchacrm.domain.Person;
import com.senchacrm.service.PeopleService;

@RestController
@RequestMapping("/people")
public class PeopleController {
    @Autowired
    PeopleService peopleService;

    @RequestMapping(method = RequestMethod.GET)
    Page<Person> getPeople(@PageableDefault Pageable pageable) {
        Page<Person> people = peopleService.findAll(pageable);
        return people;
    }

    @RequestMapping(value = "{id}", method = RequestMethod.GET)
    Person getPeople(@PathVariable Integer id) {
        Person person = peopleService.findOne(id);
        return person;
    }

    @RequestMapping(method = RequestMethod.POST)
    ResponseEntity<Person> postPeople(@RequestBody Person person, UriComponentsBuilder uriBuilder) {
        Person created = peopleService.create(person);
        URI location = uriBuilder.path("people/{id}").buildAndExpand(created.getId()).toUri();
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(location);
        return new ResponseEntity<>(created, headers, HttpStatus.CREATED);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT)
    Person putPerson(@PathVariable Integer id, @RequestBody Person person) {
        person.setId(id);
        return peopleService.update(person);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    void deletePerson(@PathVariable Integer id) {
        peopleService.delete(id);
    }

}
