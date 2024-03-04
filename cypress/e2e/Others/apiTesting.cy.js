const home = 'https://jsonplaceholder.typicode.com/'

describe('API Crud', () => {

    it('GET', function(){

        cy.request({

            method: 'GET',
            url: home + 'posts'          

        }).then(function(response){
            expect(response).property('status').to.equal(200);
            expect(response.body[0]).to.have.property("title", "sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
        });

    })

    it('POST', function(){

        cy.request({

            method: 'POST',
            url: home + "posts",
            body: {
                'title' : 'lorem ipsum',
                'body': 'dolor sit amet'
            },
            headers: {
                'content-type' : 'application/json'
            }              

        }).then(function(response){

            expect(response.body).have.property('title');
            expect(response.body).have.property('body', 'dolor sit amet')
            

        });

    })

    it('PATCH', function(){

        cy.request({

            method: 'PATCH',
            url: home + "posts/1",
            body: {
                'title' : 'Anthem of the Heart',
            },
            headers: {
                'content-type' : 'application/json'
            }              

        }).then(function(response){

            expect(response.body).have.property('title');
            expect(response.body).have.property('title', 'Anthem of the Heart')
            expect(response.body).have.property('body', 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto')
            console.log(response.body)

        });

    })

    it('DELETE', function(){

        cy.request({

            method: 'DELETE',
            url: home + "posts/1",

            headers: {
                'content-type' : 'application/json'
            }              

        }).then(function(response){

            expect(response.body).to.be.empty
            console.log(response.body)

        });

    })


}) 