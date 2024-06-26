import apiSlice from "./apiSlice"

const messegeApiSlice = apiSlice.injectEndpoints({

    endpoints: (build) => ({

        getAllMessages: build.query({
            query: () => ({
                url: '/api/messege/getAll'
            }), 
            providesTags:["Messege"]
        }),
        getMessageByIdClient: build.query({
            query: (id) => ({
                url: '/api/messege',
                body:id
            }), 
            providesTags:["Messege"]
        }),
        getMessagesNotChecked: build.query({
            query: () => ({
                url: '/api/messege/getMessagesNotChecked'
            }), 
            providesTags:["Messege"]
        }),

        writeMessage: build.mutation({
            query: (messege) => ({
                url: '/api/messege/',
                method:"POST",
                body:messege
            }),
            invalidatesTags:["Messege"]
        }),

        updateChecked: build.mutation({
            query: (id) => ({
                url: '/api/messege/update/'+id,
                method:"PUT",
            }),
            invalidatesTags:["Messege"]
        })

    }),
})

export  const { 
    useGetAllMessagesQuery,
    useGetMessagesNotCheckedQuery,
    useGetMessageByIdClientQuery,
    useWriteMessageMutation,
    useUpdateCheckedMutation,
    } = messegeApiSlice