package api_automation.runner;

import java.io.File;

import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import com.cucumber.listener.Reporter;

import api_automation.utils.ConfigFileReader;
import api_automation.utils.FileReaderManager;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;




@CucumberOptions(
        features = "src/test/resources/features",
        glue = {"api_automation.stepdefs"},
        tags = {"~@Ignore"},
        format = {
                "pretty",
                "html:target/cucumber-reports/cucumber-pretty",
                "json:target/cucumber-reports/CucumberTestReport.json",
                "rerun:target/cucumber-reports/rerun.txt"
        },plugin = {"json:target/cucumber-reports/CucumberTestReport.json",
        		"com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"
        })

public class TestRunner {
    private TestNGCucumberRunner testNGCucumberRunner;
 
    @BeforeClass(alwaysRun = true)
    public void setUpClass() throws Exception {
        testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
    }
 
    @Test(groups = "cucumber", description = "Runs Cucumber Feature", dataProvider = "features")
    public void feature(CucumberFeatureWrapper cucumberFeature) {
        testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
    }
 
    @DataProvider
    public Object[][] features() {
        return testNGCucumberRunner.provideFeatures();
    }
 
    @AfterClass(alwaysRun = true)
    public void tearDownClass(){
    	testNGCucumberRunner.finish();
    	try {
    		Reporter.loadXMLConfig(new File(ConfigFileReader.getConfigPropertyVal("reportConfigPath")));
		} catch (Exception e) {
			e.printStackTrace();
		}
       
    }
}