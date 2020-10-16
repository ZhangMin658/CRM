package com.senchacrm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.senchacrm.domain.Person;
import com.senchacrm.repository.PeopleRepository;

@Service
@Transactional
public class PeopleService {
    @Autowired
    PeopleRepository peopleRepository;

    public List<Person> findAll() {
        return peopleRepository.findAllOrderByName();
    }

    public Page<Person> findAll(Pageable pageable) {
        return peopleRepository.findAllOrderByName(pageable);
    }

    public Person findOne(Integer id) {
        return peopleRepository.findOne(id);
    }

    public Person create(Person customer) {
        return peopleRepository.save(customer);
    }

    public Person update(Person customer) {
        return peopleRepository.save(customer);
    }

    public void delete(Integer id) {
        peopleRepository.delete(id);
    }
}
