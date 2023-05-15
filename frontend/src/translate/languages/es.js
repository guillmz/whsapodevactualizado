const messages = {
  pt: {
    translations: {
      signup: {
        title: "registrarse",
        toasts: {
          success: "¡Usuario creado con éxito! Acceso!!!.",
          fail: "Error al crear usuario. Verifique la información proporcionada.",
        },
        form: {
          name: "Nombre",
          email: "Email",
          password: "contraceña",
        },
        buttons: {
          submit: "rigistro",
          login: "¿Ya tienes una cuenta? Entre!",
        },
      },
      login: {
        title: "Login",
        form: {
          email: "Email",
          password: "contraseña",
        },
        buttons: {
          submit: "Entrar",
          register: "¿No tienes una cuenta? Registro!",
        },
      },
      auth: {
        toasts: {
          success: "Inicio de sesión correcto!",
        },
      },
      dashboard: {
        charts: {
          perDay: {
            title: "entradas hoy: ",
          },
        },
        messages: {
          inAttendance: {
            title: "En atencion"
          },
          waiting: {
            title: "Esperando"
          },
          closed: {
            title: "Finalizado"
          }
        }
      },
      connections: {
        title: "Conexiones",
        toasts: {
          deleted: "Conexión de WhatsApp eliminada con éxito!",
        },
        confirmationModal: {
          deleteTitle: "iliminar",
          deleteMessage: "¿Estás seguro? Esta acción no se puede revertir..",
          disconnectTitle: "Desconectar",
          disconnectMessage:
            "¿Está seguro? Deberá escanear el código QR nuevamente.",
        },
        buttons: {
          add: "Añadir WhatsApp",
          disconnect: "desconectar",
          tryAgain: "Intentar nuevamente",
          qrcode: "QR CODE",
          newQr: "Nuevo QR CODE",
          connecting: "Conectando",
        },
        toolTips: {
          disconnected: {
            title: "Error al iniciar sesión en WhatsApp",
            content:
              "Asegúrese de que su teléfono esté conectado a Internet y vuelva a intentarlo, o solicite un nuevo código QR",
          },
          qrcode: {
            title: "Esperando la lectura del código QR",
            content:
              "Haga clic en el botón 'CÓDIGO QR' y escanee el Código QR con su teléfono celular para iniciar la sesión",
          },
          connected: {
            title: "Conexión establecida!",
          },
          timeout: {
            title: "Se ha perdido la conexión con el teléfono móvil.",
            content:
              "Asegúrese de que su teléfono esté conectado a Internet y WhatsApp esté abierto, o haga clic en el botón 'Desconectar' para obtener un nuevo código QR",
          },
        },
        table: {
          name: "Nombre",
          status: "Status",
          lastUpdate: "Última actualización",
          default: "Estándar",
          actions: "Acciones",
          session: "sesión",
        },
      },
      whatsappModal: {
        title: {
          add: "Añadir WhatsApp",
          edit: "Editar WhatsApp",
        },
        form: {
          name: "Nombre",
          default: "estandar",
          farewellMessage: "Mensaje de despedida",
          isMultidevice: "Multi dispositivo",
          transferTicketMessage: "Mensaje de transferencia de ticket",
          reopenLastTicket: "Reabrir Ultimo Ticket",
          minutes: "Minutos",
          newticketafter: "Generar un nuevo ticket después",
          titlenewticketafter: "Al recibir un mensaje",
        },
        buttons: {
          okAdd: "Añadir",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "WhatsApp guardado con éxito.",
      },
      qrCode: {
        message: "Escanea el QrCode para iniciar la sesión",
      },
      contacts: {
        title: "Contactos",
        toasts: {
          deleted: "Contacto eliminado con éxito!",
        },
        searchPlaceholder: "Buscar...",
        confirmationModal: {
          deleteTitle: "borrar ",
          importTitlte: "Importar contactos",
          deleteMessage:
            "¿Está seguro de que desea eliminar este contacto? Todos los boletos relacionados se perderán.",
          importMessage: "¿Quieres importar todos los contactos del teléfono Celular?",
        },
        buttons: {
          import: "Importar Contactos",
          add: "Añadir Contacto",
        },
        table: {
          name: "Nombre",
          whatsapp: "WhatsApp",
          email: "Email",
          actions: "Acciones",
        },
      },
      contactModal: {
        title: {
          add: "añadir contacto",
          edit: "Editar contacto",
        },
        form: {
          mainInfo: "Detalles de contacto",
          extraInfo: "Informaciones adicionales",
          name: "Nombre",
          number: "Número de Whatsapp",
          email: "Email",
          extraName: "Nombre de campo",
          extraValue: "Valor",
        },
        buttons: {
          addExtraInfo: "Añadir informacion",
          okAdd: "Añadir",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "Contacto guardado correctamente.",
      },
      quickAnswersModal: {
        title: {
          add: "Agregar respuesta rápida",
          edit: "Editar respuesta rápida",
        },
        form: {
          shortcut: "Atajo",
          message: "Respuesta Rápida",
        },
        buttons: {
          okAdd: "Añadir",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "Respuesta rápida guardada con éxito.",
      },
      queueModal: {
        title: {
          add: "añadir Area & Chatbot",
          edit: "Editar Area & Chatbot",
        },
        form: {
          name: "Nombre",
          color: "Color",
          greetingMessage: "mensaje de saludo",
          transferQueueMessage: "Mensaje de transferencia entre sectores",
          outOfWorkMessage: "Personaliza el mensaje cuando estés fuera del horario de oficina",
          startWorkHour: "Archivo: Apertura",
          endWorkHour: "archivo: Cierre",
          monday: "Lunes",
          tuesday: "Martes",
          wednesday: "Miercoles",
          thursday: "jueves",
          friday: "Viernes",
          saturday: "Sábado",
          sunday: "Domingo",
          holiday: "Feriado",
          token: "Token",
          checkHourExpedient: "Consultar Horario de Oficina"
        },
        buttons: {
          okAdd: "Añadir",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
      },
      userModal: {
        title: {
          add: "Añadir usuário",
          edit: "Editar usuário",
        },
        form: {
          name: "Nombre",
          email: "Email",
          password: "Contraceña",
          profile: "Perfil",
          whatsapp: "Conexión predeterminada",
        },
        buttons: {
          okAdd: "Añadir",
          okEdit: "Salvar",
          cancel: "Cancelar",
        },
        success: "Usuario guardado con éxito.",
      },
      tagModal: {
        title: {
          add: "Nueva Etiqueta",
          edit: "Editar Etiqueta",
        },
        form: {
          name: "Nombre",
          color: "Color"
        },
        buttons: {
          okAdd: "Añadir",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "etiqueta guardada con éxito.",
      },
      chat: {
        noTicketMessage: "Seleccione un ticket para comenzar a chatear.",
      },
      ticketsManager: {
        buttons: {
          newTicket: "Nuevo",
        },
      },
      ticketsQueueSelect: {
        placeholder: "Areas & Chatbot",
      },
      tickets: {
        toasts: {
          deleted: "El ticket en el que estabas ha sido eliminado.",
        },
        notification: {
          message: "Mensaje de",
        },
        tabs: {
          open: { title: "Entradas" },
          closed: { title: "Resueltos" },
          search: { title: "Buscar" },
        },
        search: {
          placeholder: "Buscar tickets y mensajes",
        },
        buttons: {
          showAll: "Todos",
        },
      },
      transferTicketModal: {
        title: "Transferir Ticket",
        fieldLabel: "Digite para buscar usuários",
        fieldQueueLabel: "Transferir para Area & Sector",
        fieldConnectionLabel: "Transferir para conexion",
        fieldQueuePlaceholder: "Selecione una Area",
        fieldConnectionPlaceholder: "Selecione una conexion",
        noOptions: "No se encontró ningún usuario con ese nombre",
        buttons: {
          ok: "Transferir",
          cancel: "Cancelar",
        },
      },
      ticketsList: {
        pendingHeader: "Esperando",
        assignedHeader: "Atendiendo",
        noTicketsTitle: "Nada aqui!",
        noTicketsMessage:
          "No se encontraron entradas con este estado o término de búsqueda",
        connectionTitle: "Conexión actualmente en uso.",
        buttons: {
          accept: "Aceptar",
        },
      },
      newTicketModal: {
        title: "Crear Ticket",
        fieldLabel: "Escriba para buscar contacto",
        add: "Añadir",
        buttons: {
          ok: "guardar",
          cancel: "Cancelar",
        },
      },
      mainDrawer: {
        listItems: {
          dashboard: "Dashboard",
          connections: "Conexiones",
          tickets: "Tickets",
          contacts: "Contactos",
          quickAnswers: "Respuestas Rápidas",
          queues: "Areas & Chatbot",
          schedules: "Agendamientos",
          tags: "Tags & Etiquetas",
          administration: "Administracion",
          users: "Calaboradores",
          settings: "Configuraciones",
        },
        appBar: {
          user: {
            profile: "Perfil",
            logout: "Sair",
          },
        },
      },
      notifications: {
        noTickets: "sin notificación.",
      },
      schedules: {
        title: "Agendamientos",
        confirmationModal: {
          deleteTitle:
            "¿Está seguro de que desea eliminar este programa?",
          deleteMessage: "Esta acción no se puede revertir..",
        },
        table: {
          contact: "Contacto",
          body: "Mensaje",
          sendAt: "fecha de Agendamiento",
          sentAt: "Fecha de Envio",
          status: "estado",
          actions: "Acciones",
        },
        buttons: {
          add: "Nuevo Agendamiento",
        },
        toasts: {
          deleted: "Cita eliminada con éxito.",
        }
      },
      scheduleModal: {
        title: {
          add: "Nuevo Agendamento",
          edit: "Editar horario",
        },
        form: {
          body: "Mensaje",
          contact: "Contacto",
          sendAt: "fecha de Agendamiento",
          sentAt: "Fecha de Envio"
        },
        buttons: {
          okAdd: "Añadir",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "Agendamiento guardado con exito.",
      },
      queues: {
        title: "Areas & Chatbot",
        table: {
          name: "Nombre",
          color: "Color",
          greeting: "Mensaje de saludo",
          actions: "Accion",
        },
        buttons: {
          add: "Añadir Area",
        },
        confirmationModal: {
          deleteTitle: "iliminar",
          deleteMessage:
            "¿Estás seguro? ¡Esta acción no se puede revertir! Los tickets en esa cola seguirán existiendo, pero ya no tendrán colas asignadas.",
        },
      },
      queueSelect: {
        inputLabel: "Areas",
      },
      quickAnswers: {
        title: "Respuestas Rápidas",
        table: {
          shortcut: "Atajo",
          message: "Respuesta Rápida",
          actions: "Acciones",
        },
        buttons: {
          add: "Añadir respuesta",
        },
        toasts: {
          deleted: "Respuesta rápida eliminada con éxito.",
        },
        searchPlaceholder: "Buscar...",
        confirmationModal: {
          deleteTitle:
            "¿Está seguro de que desea eliminar esta respuesta rápida?: ",
          deleteMessage: "Esta acción no se puede revertir..",
        },
      },
      users: {
        title: "colaboradores",
        table: {
          name: "Nombre",
          email: "Email",
          profile: "Perfil",
          whatsapp: "Conexion estandar",
          actions: "Acciones",
        },
        buttons: {
          add: "añadir suário",
        },
        toasts: {
          deleted: "Colaborador eliminado con éxito.",
        },
        confirmationModal: {
          deleteTitle: "Iliminar",
          deleteMessage:
            "Todos los datos del usuario se perderán. Los tickets abiertos de este usuario se moverán a el Area.",
        },
      },
      tags: {
        title: "Etiquetas",
        confirmationModal: {
          deleteTitle:
            "¿Está seguro de que desea eliminar esta etiqueta?",
          deleteMessage: "Esta acción no se puede revertir..",
        },
        table: {
          name: "Nombre",
          color: "Cor",
          tickets: "Registros etiquetados",
          actions: "Accion",
        },
        buttons: {
          add: "Nueva Etiqueta",
        },
        toasts: {
          deleted: "Etiqueta eliminada con éxito.",
        }
      },
      settings: {
        success: "Configuración guardada con éxito.",
        title: "Configuraciones",
        settings: {
          userCreation: {
            name: "Creación de usuarios",
            options: {
              enabled: "Ativado",
              disabled: "Desativado",
            },
          },
          timeCreateNewTicket: {
            name: "mensaje de bienvenida después",
            note: "Selecciona el tiempo que tardará en abrir un nuevo ticket si el cliente te vuelve a contactar",
            options: {
              "10": "10 Segundos",
              "30": "30 Segundos",
              "60": "1 minuto",
              "300": "5 minutos",
              "1800" : "30 minutos",
              "3600" : "1 hora",
              "7200" : "2 horas",
              "21600" : "6 horas",
              "43200" : "12 horas",
              "86400" : "24 horas",
              "172800" : "48 horas",
            },
          },  
          call: {
            name: "aceptar llamadas",
            options: {
              enabled: "Activado",
              disabled: "Desactivado",
            },
          },
          CheckMsgIsGroup: {
            name: "Ignorar mensajes de grupo",
            options: {
                enabled: "Activado",
                disabled: "Desactivado",
            },
          },
        },
      },
      messagesList: {
        header: {
          assignedTo: "Asignado a:",
          buttons: {
            return: "Retornar",
            resolve: "Resolver",
            reopen: "Reabrir",
            accept: "Aceptar",
          },
        },
      },
      messagesInput: {
        placeholderOpen: "Escribe un mensaje o presiona ''/'' para usar respuestas rápidas registradas",
        placeholderClosed:
          "Reabrir o aceptar este ticket para enviar un mensaje.",
        signMessage: "colaborador",
      },
      contactDrawer: {
        header: "Detalles de contacto",
        buttons: {
          edit: "Editar conctato",
        },
        extraInfo: "Otras informaciones",
      },
      ticketOptionsMenu: {
        delete: "Borrar",
        transfer: "Transferir",
        confirmationModal: {
          title: "Eliminar ticket de contacto",
          message:
            "¡Atención! Todos los mensajes relacionados con el ticket se perderán.",
        },
        buttons: {
          delete: "Eliminar",
          cancel: "Cancelar",
        },
      },
      confirmationModal: {
        buttons: {
          confirm: "Ok",
          cancel: "Cancelar",
        },
      },
      messageOptionsMenu: {
        delete: "Eliminar",
        reply: "Responder",
        confirmationModal: {
          title: "¿Borrar mensaje?",
          message: "Esta acción no se puede revertir..",
        },
      },
      backendErrors: {
        ERR_TAG_NAME_ALREADY_EXISTS: "Ya existe una etiqueta con ese nombre.",
        ERR_NO_OTHER_WHATSAPP: "Debe haber al menos un WhatsApp predeterminado.",
        ERR_NO_DEF_WAPP_FOUND:
          "No se encontró WhatsApp predeterminado. Revisa la página de conexiones.",
        ERR_WAPP_NOT_INITIALIZED:
          "Esta sesión de WhatsApp no ​​se ha inicializado. Revisa la página de conexiones.",
        ERR_WAPP_CHECK_CONTACT:
          "No se puede verificar el contacto de WhatsApp. Revisa la página de conexiones",
        ERR_WAPP_INVALID_CONTACT: "Este no es un número de whatsapp válido.",
        ERR_WAPP_DOWNLOAD_MEDIA:
          "No se pueden descargar medios de WhatsApp. Revisa la página de conexiones.",
        ERR_INVALID_CREDENTIALS:
          "Error de autenticación. Inténtalo de nuevo.",
        ERR_SENDING_WAPP_MSG:
          "Error al enviar mensaje de WhatsApp. Revisa la página de conexiones.",
        ERR_DELETE_WAPP_MSG: "No se puede eliminar el mensaje de WhatsApp.",
        ERR_OTHER_OPEN_TICKET: "Ya hay un ticket abierto para este contacto.",
        ERR_SESSION_EXPIRED: "Sesión expirada. Por favor entre.",
        ERR_USER_CREATION_DISABLED:
          "El administrador ha inhabilitado la creación de usuarios.",
        ERR_NO_PERMISSION: "No tienes permiso para acceder a este recurso..",
        ERR_DUPLICATED_CONTACT: "Ya existe un contacto con este número.",
        ERR_NO_SETTING_FOUND: "No se encontró ninguna configuración con este ID.",
        ERR_NO_CONTACT_FOUND: "No se encontró ningún contacto con este ID.",
        ERR_NO_TICKET_FOUND: "No se encontraron boletos con esta ID.",
        ERR_NO_USER_FOUND: "No se encontró ningún usuario con este ID.",
        ERR_NO_WAPP_FOUND: "No se encontró WhatsApp con este ID.",
        ERR_CREATING_MESSAGE: "Error al crear mensaje en la base de datos.",
        ERR_CREATING_TICKET: "Error al crear ticket en la base de datos.",
        ERR_FETCH_WAPP_MSG:
          "Error al obtener el mensaje en WhatsApp, tal vez sea demasiado antiguo.",
        ERR_QUEUE_COLOR_ALREADY_EXISTS:
          "Este color ya está en uso, elija otro.",
        ERR_WAPP_GREETING_REQUIRED:
          "El mensaje de saludo es obligatorio cuando hay más de una area.",
      },
    },
  },
};

export { messages };