import './App.css';
import { useState } from 'react'

const getImages = async query => {
    const url = "https://serverless-api.ranulph.workers.dev/"

    const resp = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ query }),
        headers:    { 'Content-type': 'application/json' }
    })

    return resp.json()
}

export function App() {

}