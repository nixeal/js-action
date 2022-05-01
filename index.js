const core = require('@actions/core');
const core = require('@actions/github');

try{
    // who to greet while the actions runs 
      const nameToGreet = core.getInput('who-to-greet')
    console.log(`Hello ${nameToGreet}`);
    const time = (new Date()).toTimeString();
    core.setOutput("time",time);

    // get json webhook payload for the event that triggered the work 
    const payload = JSON.stringify(github.context.payload, undefined, 2);
    console.log(`The event payload: ${payload}`);
} catch(error){
    core.setFailed(error.message);
}