package com.talentotech.energia.repository;
import com.talentotech.energia.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
