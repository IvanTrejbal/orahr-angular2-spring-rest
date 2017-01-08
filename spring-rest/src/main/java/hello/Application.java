package hello;

import java.sql.SQLException;
import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;
import oracle.jdbc.pool.OracleDataSource;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

/**
 *
 * @author tatik
 */
@ComponentScan
@EnableJpaRepositories(basePackages = {"hello.hr.core"})
@SpringBootApplication
public class Application {
    
  private static final String ORACLE_CONNECTION = "jdbc:oracle:thin:@192.168.1.56:1521:XE";

    
    
    @Bean
    public DataSource dataSource()  throws SQLException{

        OracleDataSource dataSource = new OracleDataSource();
        dataSource.setUser("hr");
        dataSource.setPassword("hr");
        dataSource.setURL(ORACLE_CONNECTION);
        dataSource.setImplicitCachingEnabled(true);
        dataSource.setFastConnectionFailoverEnabled(true);
        return dataSource;
    }

    @Bean
    public EntityManagerFactory entityManagerFactory() throws SQLException {

        HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
        vendorAdapter.setGenerateDdl(false);

        LocalContainerEntityManagerFactoryBean factory = new LocalContainerEntityManagerFactoryBean();
        factory.setJpaVendorAdapter(vendorAdapter);
        factory.setPackagesToScan("hello.hr.entities");
        factory.setDataSource(dataSource());
        factory.afterPropertiesSet();

        
        
        return factory.getObject();
    }

    @Bean
    public PlatformTransactionManager transactionManager() throws SQLException {

        JpaTransactionManager txManager = new JpaTransactionManager();
        txManager.setEntityManagerFactory(entityManagerFactory());
        return txManager;
    }   
   
//    cannot work because of :  https://jira.spring.io/browse/DATAREST-573
//    @Bean
//    public WebMvcConfigurer corsConfigurer() {
//        return new WebMvcConfigurerAdapter() {
//            @Override
//            public void addCorsMappings(CorsRegistry registry) {
//                registry.addMapping("/api/**/*")
//                .allowedOrigins("http://localhost:4200")
//                .allowedMethods("*")
//                        ; //.allowedOrigins("http://evil.com");
//            }
//        };
//    }
//

//   according https://stackoverflow.com/questions/31724994/spring-data-rest-and-cors 
   @Bean
    public CorsFilter corsFilter() {

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true); // you USUALLY want this
        config.addAllowedOrigin("http://localhost:4200");
        config.addAllowedOrigin("http://evil.com");
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    } 
    
    public static void main(String[] args){
        SpringApplication.run(Application.class, args);
    }
}
