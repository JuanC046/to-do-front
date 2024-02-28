<template lang="">
    <div>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#sing-up-modal">
            Sing Up
        </button>
        <!-- Modal -->
        <div class="modal fade" id="sing-up-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title fs-5" id="staticBackdropLabel">Sing Up</h2>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="name" aria-describedby="nameHelp">
                        <label for="email-singUp">E-mail</label>
                        <input type="email" class="form-control" id="email-singUp" aria-describedby="emailHelp">
                        <div id="emailHelp-singUp" class="form-text">We'll never share your email with anyone else.</div>
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password-singUp">
                    </div>
                    <div id="modal-footer" class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-success">Sing Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SingUp',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        singUp() {
            console.log('singUp')
        }
    }
    
}
</script>
<style scoped>
    #sing-up-modal {
        color: black;
    }
    #modal-footer {
        display: flex;
        justify-content:center;
    }
</style>