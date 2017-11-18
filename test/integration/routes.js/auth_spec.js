describe('Routes: User', () => {
    let request;

    before(() => {
        return setupApp()
            .then(app => request = supertest(app));
    });

    describe('POST /signin', () => {
        it('should return a user, token and status 200', (done) => {
            request
                .post('/api/auth')
                .send({ username: 'test1', password: '123456' })
                .end((err, res) => {
                    const { status, body } = res;
                    console.log(status);
                    expect(status).to.eql(201);
                    expect(typeof body).to.eql('object');
                    expect(typeof body.token).to.eql('string');
                    expect(body.username).to.eql('test1');
                    done(err);
                });
        });
    });
});
