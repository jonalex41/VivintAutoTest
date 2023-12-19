import JobsLoginPage from '../pageobjects/jobs.login.page.js'


describe('Login test page.', () => {
    it('Test logging into the Vivint jobs page.', async () => {
        await JobsLoginPage.tryAllLogins()
    })
}) 



