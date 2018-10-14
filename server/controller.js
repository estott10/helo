module.exports={

    addNewUser: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {username, password} = req.body;

        dbInstance.register_user(username, password)
            .then(result => {
                res.sendStatus(200);
            }).catch(err => {
                res.status(500).send( {errorMessage:'Failed to Register User'});
                console.log(err);
        })
    },

    loginUser: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {username, password} = req.body;

        dbInstance.login_user(username, password)
          .then(result => {
              res.status(200).send(result)
          }).catch( err => { res.status(500).send( {errorMessage: 'Failed to Login User'});
              console.log(err);
            })
        },

    getPosts: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {id, title} = req.query;
        
        dbInstance.get_posts(title, id)
            .then( result => {
                res.status(200).send(result)
            }).catch( err => { res.status(500).send( {errorMessage: 'Failed to Retrieve Posts'} );
                console.log(err); 
            })
        },

    getSinglePost: (req, res, next) => {
        const dbInstance = req.app.get('db');
        console.log(this.props.match.params)
        dbInstance.get_onePost(req.params.postid)
            .then( result => {
                res.status(200).send(result)
            }).catch( err => { res.status(500).send( {errorMessage: 'Failed to Retrieve Posts'} );
                console.log(err); 
            })            
    }
}
