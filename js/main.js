const app = Vue.createApp({
    data() {
        return {
            nombre: '',
            telefono: '',
            categoria: '',
            contactos: []
        }
    },
    methods: {
        agregarContacto() {
            if (this.nombre != '' && this.telefono != '' && this.categoria != '') {
                this.contactos.push({
                    nombre: this.nombre,
                    telefono: this.telefono,
                    categoria: this.categoria,
                    mensajes: 0,
                    llamadas: 0
                });

                this.nombre = '';
                this.telefono = '';
                this.categoria = '';
            } else {
                alert("Llena todos los campos");
            }
        },
    }
});
const app1 = app.mount('#componente');
