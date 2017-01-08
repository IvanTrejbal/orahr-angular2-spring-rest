package hello.hr.entities;

import hello.hr.entities.Employee;
import org.springframework.data.rest.core.config.Projection;

/**
 *
 * @author tatik
 */
@Projection(name = "empbase", types = {Employee.class})
public interface EmployeeBase {

    public Integer getEmployeeId();

    public String getFirstName();

    public String getLastName();

    public String getEmail();

}
