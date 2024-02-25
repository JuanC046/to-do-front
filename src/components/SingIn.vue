<template>
    <div>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#sing-in-modal">
            Sing In
        </button>
        <!-- Modal -->
        <div class="modal fade" id="sing-in-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title fs-5" id="staticBackdropLabel">Sing In</h2>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <label for="email">E-mail</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password">
                    </div>
                    <div id="modal-footer" class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-success">Sing In</button>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>
<script>

export default {
    name: 'SingIn',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        singIn() {
            console.log('singIn')
        }
    }

}
</script>
<style scoped>
    #sing-in-modal {
        color: black;
    }
    #modal-footer {
        display: flex;
        justify-content:center;
    }
</style>