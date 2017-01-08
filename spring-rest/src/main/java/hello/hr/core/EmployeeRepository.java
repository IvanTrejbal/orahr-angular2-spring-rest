package hello.hr.core;

import hello.hr.entities.Employee;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author tatik
 */
public interface EmployeeRepository extends PagingAndSortingRepository<Employee, Integer> {

    List<Employee> findByFirstName(@Param("firstName") String name);

    List<Employee> findByLastName(@Param("lastName") String name);

    @Query("select e from Employee e where e.firstName like ?1%")
    Page<Employee> searchByFirstNameStartsWith(@Param("firstName")String firstname, Pageable pageable);
    
    @Query("select e from Employee e where e.lastName like ?1%")
    Page<Employee> searchByLastNameStartsWith(@Param("lastName")String lasttname, Pageable pageable);
    
}
