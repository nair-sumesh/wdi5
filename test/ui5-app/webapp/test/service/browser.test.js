describe('basics tests', () => {
    it('should check the page title', async () => {
        await browser.url('http://test-app/index.html');
        const title = await browser.getTitle();
        expect(title).toEqual('Sample UI5 Application');
    });
});
