window.wallletAddress = null

const connectWallet = document.getElementsById("button")
const wallletAddress = document.getElementsById("logOut")

function checkInstalled()
{
    if ( typeof window.ethereum == 'undefined' )
    {
        wallletAddress.innerText = 'Meta mask is not installed'
        return false
    }
    connectWallet.addEventListener('click', connectWalletWithMetamask)
}

async function connectWalletWithMetamask() {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })

    if (!accounts) { return }

    window.wallletAddress = accounts[0]
    wallletAddress.innerText = window.wallletAddress

    connectWallet.innerText = 'sign out'
    connectWallet.removeEventListener('click', connectWalletWithMetamask)
    setTimeout( () => {
        connectWallet.addEventListener('click', signOutOfMetaMask)

    }, 200 )
}

function signOutOfWalletWithMetamask()
{
    window.wallletAddress = null
    wallletAddress.innerText = ''
    connectWallet.innerText = 'sign Out'

    connectWallet.removeEventListener('click', signOutOfMetaMask)
    setTimeout( () => {
        connectWallet.addEventListener('click', signOutOfMetaMask)

    }, 200 )
}

window.addEventListener('DOMContentLoaded', () => {
    checkInstalled()
});