package hello.hr.core;

import hello.hr.entities.Department;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 *
 * @author tatik
 */
public interface DepartmentRepository  extends PagingAndSortingRepository<Department, Integer> {
    
}
