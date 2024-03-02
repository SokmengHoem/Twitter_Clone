import {defineStore} from 'pinia'
export const useTweetStore = defineStore('tweets', {
    state: () => ({
        tweets: [
            {
                text: 'sjfjjjrrnffj', 
                date: '2024-02-24'
            },
        ],
        
    }),
    getters: {
        getTweets: (state) => state.tweets, 
    },
    actions: {
        addTweets(tweet) {
            this.tweets.push(tweet)
        }
    },
    persist:true,
});