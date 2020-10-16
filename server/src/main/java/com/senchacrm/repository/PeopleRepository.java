package com.senchacrm.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.senchacrm.domain.Person;

public interface PeopleRepository extends JpaRepository<Person, Integer> {
    @Query("SELECT x FROM Person x ORDER BY x.id DESC")
    List<Person> findAllOrderByName();

    @Query("SELECT x FROM Person x ORDER BY x.id DESC")
    Page<Person> findAllOrderByName(Pageable pageable);
}
