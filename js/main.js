/**
 * Boolzapp Vue
 */
var app = new Vue({
    el: '#app',
    data: {
        // Index Chat attiva
        activeUser: 0,
        // UserMessage input log
        userMessage: '',
        // searchUserinput log
        searchInput: '',
        // nostro account
        user: {
            name: 'Nome Utente',
            avatar: '_io',
        },
        // Elenco contatti
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Maurizio',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 18:30:55',
                        message: 'Sei andato poi al cinema?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 18:50:00',
                        message: 'No, vado domani sera. Vuoi venire?',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudio',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 18:50:00',
                        message: 'Ti va bene per domani?',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Massimo',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 18:50:00',
                        message: 'Alla fine l\'ho preso su amazon',
                        status: 'received'
                    },
                    {
                        date: '11/01/2020 10:50:00',
                        message: 'Anche io!',
                        status: 'sent'
                    },
                    {
                        date: '11/01/2020 12:50:00',
                        message: 'Che affare che abbiamo fatto!',
                        status: 'received'
                    },
                ],
            },
            {
                name: 'Vittorio',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 18:50:00',
                        message: 'Ma sei online?',
                        status: 'received'
                    },
                    {
                        date: '11/01/2020 11:10:00',
                        message: 'Ero al telefono, scusami',
                        status: 'sent'
                    },
                    {
                        date: '11/01/2020 12:50:00',
                        message: 'Quindi vieni domani?',
                        status: 'received'
                    },
                ],

            },
        ],
        dateUser: ''
        
    },
    methods: {
        // Send message
        send(){
            if (this.userMessage.trim() !== ''){

                const sentMessage = this.contacts[this.activeUser].messages;
                sentMessage.push({
                        message: this.userMessage.trim(),
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss') ,
                        status: 'sent'
                });
                this.scrollToEnd();
                // Auto answer after 1 sec
                setTimeout(()=>{
                    sentMessage.push({
                        message: 'ok',
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        status: 'received'
                    });
                    this.scrollToEnd();
                }, 1000);
                
                this.userMessage = '';
                
            }
            else {
                this.userMessage = '';
            }
            
        },
        // Search user by Input
        searchUser(){
            this.contacts.forEach((element) =>{
                if (element.name.toLowerCase().includes(this.searchInput.toLowerCase())){
                     element.visible = true;
                }
                else {
                     element.visible = false;
                }
            });            
        },
        // Get last log in time
        getTime() {
            dateUser = this.contacts[this.activeUser].messages[this.contacts[this.activeUser].messages.length - 1];
            if (dateUser.status ==='received'){
                return dateUser.date
            }
            return null          
        },
        // Auto scroll to end for chat
        scrollToEnd (){
            setTimeout(() =>{
                this.$refs.chatContainer.scrollTop = this.$refs.chatContainer.scrollHeight; 
            },10) 
        }
    },
});
