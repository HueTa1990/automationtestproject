import io.cucumber.testng.CucumberOptions;
import io.cucumber.testng.AbstractTestNGCucumberTests;
import org.testng.annotations.Test;

@CucumberOptions(
        features = "src/test/resources/features/Login/LoginCMS.feature",
        glue = {"com.huetester.stepdefinition"},
        plugin = {"pretty", "html:target/cucumber-html-report.html"}
)
@Test
public class RunCucumberTests extends AbstractTestNGCucumberTests {

}
