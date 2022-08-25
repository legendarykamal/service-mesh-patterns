import styled from "styled-components";

export  const NavStyleWrapper = styled.nav`
    
    .nav{
        position: sticky;
    }
    
    .navbar{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 40px 184px;
        gap: 100px;
        padding-right: 70px;
        position: relative;
        width: auto;
        height: 110px;
        // left: calc(50% - 1440px/2);
        top: -18px;
        background: #FFFFFF;
        box-shadow: 0px 10px 25px rgba(0, 179, 159, 0.2);
    }
    li{
        width: 88px;
        height: 44px;
        list-style: none;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        
        color: #3C494F;

    }

    .pattern{
        // position: relative;
        // top: 75px;
        width: 165px;
    }
    button{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 20px 32px;

        width: 149px;
        height: 56px;
        background: #00B39F;
        border-radius: 4px;
    }
    .label{
        width: 85px;
        height: 40px;

        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
        color: #FFFFFF;
    }
`;