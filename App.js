import React from "react";
import ReactDom from "react-dom/client";

const Title=() =>(
    <a href="/">
        <img 
            className="logo" 
            alt="logo" 
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEX///8AAAD+/v77+/tubm7t7e3a2trx8fH4+Pjy8vLl5eXBwcGtra3d3d3q6ur19fXT09OXl5d0dHQhISFJSUm1tbVZWVmNjY1gYGBPT09AQEDIyMg4ODhmZmaGhoafn58vLy+np6fDw8N+fn6RkZEWFhY2NjYmJiYbGxsNDQ15eXkjIyMsLCyHh4evzEddAAAYR0lEQVR4nO1dCZuiuhIl7DsBCasICG6o///vvaoEULvbmZ7untc99+PMXEdFSZ2kUlsSryQtWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwYIFCxYsWLBgwecgy98twd8CMpM5vluSv4MXxP5DPOW7R8v3aFlSzw++U6KvhTyrpe/U6RBFqlpVUTT0LQ2my98t4+eADBRZCti1qjYtcxiHw+qoUvtSkWRF+ccZAgVJCtxs3ZW6E0ZZHgPySq1LnalFtFX+bcsqdFBhSe56TI33RXVtXcbctsv263zj6GGsUv7B75b0owANlCVbXbt2XZC81i0T3wG1VUyLputdwry06QPp31VUnIHbRvW3a1J5r64qZU4Snca5/Q+PoWTWK9erSOe//QFakdDf7Mr/r1hfBBwWOQj3TrkuSknzPNuD/2z4y+HxV7LinjO73jnyPziMMNukoC4c1gwwgBl5C0BdoknhtUcGc/a7Jf5TgDlRXCQYWsDWTfu0AE7Hqk9TeB7lJ2ToSGiJLnpL6L83iDAm5YE5lxBMpRgfFzjldLxs93tC9gzdpR3t7bB5MlN/MBTJj3tapMacTpTAMLmZVHYkDePKbGeJVqnmv+b7ZWmT2VXlT9onC4b6fFnpyMXFp4qkN53duNK/FKOiqPqubPd0HpgXDBV8fW75U0VipHRj/x8aRD4WleodwpvQL8dQlvziyBliXKAWWlKPKfL3yPxOjDMOHyjRN2v/TYZAjgaQb3Snlr+Cz3jEZRDbiPDt59YBRrkChc/C2NzdDeEdQ3ivLTz4xyH1PGZJbMcuzk7bNvmbP5EhRtSSVqtJtqGSEjN35T9jGBEd3tBJP6cVJWGbQZK3alwkofZDKcJ8klmchO61OTB9bcUVn2LT1RtDyUyAIfTGlc09oKy6bea1qzysqxPEOj9QSzEpktxLbSqyoifnKjFJK+bYeP2OIV3jGOKY34hUiZ5nl96A8EAviPcTMyp0EKda4npXrknqkYeUQb7z+AMRDO/5t2uakatI+ZVV/EOzYjVWrFJD2SLSukS7vyYY5qVhlBiG6y+nGm3o9eBgFLftTYfo0s8DiNt0WgFpAgyCSrY1UR4vl/dphf7yy/qBhfBd8CQxCRWu4T8NwOfQ6yTG2BqS+rI/vcFwlWdJfIYnL1J+SDEubU02liSZFXEl8CM/jyFo3boLumZDbSc+kjJ9i2FmS7LmrjlD+eGqfQCGzZVSt8gNjTg/k2GXm0adxHkT18U2fEtLRdRWH1+PoXdgfRXGl9VepRCn+j+TIYV0SLJZ6+pS9ralSbiFsYvXDMum7EJJd9ttIFlF9TMdoqRs4smCRB0l9OHyfeSdvbY0bUGrWrwIUgwIfh5DhJ3wQYLorU4C0t5feoi8B+Et7q+q4PEdrLBKfoh25geOIYceZU6ATo3ug0K9n0uPkffae6GGyqUrEyycyrQ7tN/EbgpBxuUyeXw2hSaKx9y2TdfrFOeYWbD2YrwZefPs6b5mgc8oYekApsloE5IxxtytNl2aPyUKlIH8+P5XMgQNMrfhZuhS1+P6NDLEKUNDNSmKOI8vELi0IN2QBxDDvRV5z2/cRJelqvAgezK30ZGQIs/zdZFtmHFf2IBbWU4/VFXUU3z1Fzii7lXrpAt7tYjrYC7AQNN2WsQbxiu+upMWu4TBoNhRbEizx3jF8O7GcAPSOonmdReS9Ft+H9pW68y5LU2hqVaLqq9D9dD01l+giCPmrHJqBGZg2ekhsialBdnzmPnB2KISaE58Ui1Vte8txi8YYhVjZWU925OIGuZ0H4tGq3TyODycr6gVmKblpyQKvtpf8rlGT5EyaVe7q+diA2sGW3xEFrJIVr0r0p0eFmj1xUS9Z/hoKEE3HLJ1SAFxuSLNy8bwmcC9qL6Y6BASFKo9dQkjmy+fi3i74jA+wYfNyR/LMtvj1eALafct2jEhlbKHLlFe1Evlh6ohTyu1Qy4dyCk0p/uj6uMfia1Ug99BCcL1LRuT3aPzF9YBROld2E1F8kSBEwRfRb6YbrJ4xAd4tiGk9kjKjQK/UIs6/tRfs7SSkuwklay3N+M8Sg8UXdIFvEfsoruzWlYSyV87iLw8uFcmzwAiW/GGM7SzM0TJsqnZljm7EC5gvTuUbFXzUbyCeeRZ06lI4tC48wGKZEZHm4l4Thl33MB3LM/TcAOAShhf6/eacJ56IIWTY6XnK0je7qLk2WTAUASrSFGYICQ4hLRqzgeVKmJZm9atjQaoKWh7qEH3lGgNrgRRFMV+o80+FT5lDJdySzqwmkEZMl+otFHvV7t96MMgHgiPDrz9bLZ4vblwpPnFpwhyiTXbtyQDY5Sxg6FP6QEXHeTtCSsX7EBqVic7F6272Rb5Bavdkp5ktN73wDYwJmiaFijjZIahVnS1cMomRV/eH5ImsjnBvOmZW5HBl/SYVCZovR1v5HFnB37di5lk+rYdjHPjUwwtJ8rzVFfyBPvSpA44YsmIsNwr2fl+7YJC7sF8S+aw26LNLFKjbDKU1B+yrRurpfl4V77DhOuewfJky4oa51x5bhVn3aL8Ha/xlPuMSn6+P0HCD/xjbmkoH2aJxk7gVnmO3fcphlj6Y3mmVoVqdQ027mfH1tD0ocFKYNDFLoQikr/1cAlNO0boNS8MzYrNZ2ufMUctap2bydkRKMKTW3RTbMowd7Erg6GyIHQPoas00uGSnO+UAY5dj6U3mPCZ42l2hgUOWWG5zuKuvjaV/2k1tevSNzQnp+UJR8hID8VmkycujkN7ZHZSj8YF9DPP0PYMCbPpseXRTuBmodMmeV0a0w3HEpRsb9NcdZ2hcvh72rrzy02xxQlM2LjoCIO1Z0GGqzaSt8mzTj3zCWhUg6duoDOcXSt9Sk2haYpJkBcWpVTFoPWy79R96OoolLsLFevKnbIsGHbcKFzzaiCqCEoV2qkta7Oia7f2rK2B59RqPLgsrHpPRJneqVCLjFnIChmOY10fPLAyA58Z2zpN2xK1210xv8ohcJWS7HPRDWp8B6EEu4DF1M8pHwg5MLmRZacOGnYKFwcFpdH3W27bjLLuIhF2o167WdQyd5Pn1abmO4bqsKvirHdZrUaONdoPr9vUjoe+RTJOlTQGFnYyQDhYnjd8jVjBzAKuOPvIMtk6g87Jo0/Gb9BGBbGGXdq44neKbnGl359SNPtWHzOhJ1rVKaP5VjSwvjNsZxP1uKktHKosyaqqq/HFRk23t8Vt0zdEzAb3rAkbvxklFDk7jXqLaIJ6X9k4i2kgOcfP1qzAV7iHcJKD5nlIOR3frRpmjg3mkFfYlFXDbVOlYgboGHxIEmhZbtuuWGdDXwNNgOuGVzXJN2A5EIYBAfVj1SK99KWt0TarxlIITYqUp4yK56qHcJzUigMW8PMxuFU3SZf2YRjW7XAiIOlmo+YrUoV1iKj7mDRxXlxIF6bXDWCIVBirBOKYHH38er0u1pD3kV0DGSS8HReHEyHHQnwkAcC4qtHQdfDlK6DvIPjJ82J1GOoR0fm0TqDlKj6QHFvu+3RTNar9+YoOGBC9Be0CIUAM+DfhgufwB2Tf7/dNc1ntMCA7rd7cNfP1OB7PlyJPsijcal9U0ZEV8w0E97AsCwOWKW7hGsr3PumUo0Rst6ik4ybTB7j84Q6Pl+FL8HVKddvmem0FAUrwBdkFZC0meCZldtX87y2D+z4IZzLiM6JE/yfF+xTKz8zFulJ/Pl6WJv+DkL+9Qv7Xu/i7CX6U4aM1m8pc4vlP3XLzBG/IOlfYH669WOz4QEMGuDDffg3f/P2335TSAoeIHvHl9+X7Vnw+jWTr9o7GnYFdQiSOcep0Fw1nnGnDC3hl/zlDyFgh2H8Tnf6hHpNNBjFQksSF9uKSEd1aUjsepQdsfku9Ii99KKqSV2hdfpc8L/m2VZW/KD6wfgMM06YodtzHrDCcXK/PwuPsnD/nxxP3dt/wGzwyhHwXwliB83qdCIb1fi3aJpcKGAZYflR5rblu1qMUmGesxcfCDzG0QRUY3q1gItoqnSuKuGMfmdagaD6lbfEGQ1OnLpda3VLqiboNfNap4K1TSz1QUm0Dz9d8oRGuMLjLijM04GMJMvyIQJyGpo59J2Bs4XYn9pEQUNwvGF4x5CVjheFQpPyAlzQ9MOhPrD/ifMMxjPxRrKCH4XYmGdnHxlBIJWmRYDiXSrfQ2R9iKO4nX99giPPMx61DuJN/rnzKkIGSxB+DXm84VHSKgBWXj+HoQejHxnDEHUMhiwXd5348jJc3bzBEmC1ciO9Wo3ARpIDOlEXpWzGETRWVrpGhwNcwnNuVtg1p/wJDiaK1ebRh7nF/t5GWV3+EDDNDWSwZf5yh/JIh2p+KtB9yiOIGTxn62FKn3fn2YEM287LqXeDyJsNPz0P+ykSVMfu/wxClRmupzAxpQpy3BX9DS7+EoZKgZ5Jcbt8+iKcM+UZTNGK3pQd314i9DK/wtxhaJDaxUH/u33U2+c02nzOUtQ6tqTF/z0qFbX0DX8fwztKgwSa5AtOCZqE1rkNh5Gob05K2EFQyNRG7zqtv3ErgRzXlVwzx4AxZ6bM/1DPCxjVgUQWygqlC8YyhuB5otmjsHWnMnT/EmjpJ+IKZboulQZ91+fmQbxx/suIYmtFa3R+brJ52yfAlOMMZ8nMRMUN6yx+ObekYnNxmgLPLx4V+k/FKZVpPu+GfMsRdKLSuivMlH5gt1t5+g5khkG04w2lpVtLhUhJFyek00DF5k2XDjUlTDeqa7FtjrMZDXwCvY57sj6mdPmdo4LVE1HfhTinZjBuFzGSMUKeQ/zlDyUuPJFfVBPQhK3+fNt7NQ8WGeCsxJVFfA5p6TFahZxl62OApNHEzq76QhPmBVmZk14uFDRhBuEnMqL4djn30VEtlXFslJ33MbvWcuKN3ULZtnZ0I2eu/G0PJTkjsUs3QawhdY/u3S1Ejwzh03RrDYK6lYtoZGTmlXKOCcEUyX2ySYBcSl7wxDzqgHfeLhIQc+EqD362b0zNbKgk1DccvOafp9B5nVebclwg8tzQD2YlNjUoLQW3/jsU27aGCmEzuV5ZA6mIM5uwMYwquuDk51aZQWYiHYzG05Z7gNgxk4WWvs6cblB670+KfDEIyL/FzQTbvYUh35NSLBR0fhuTy26LUPIZtGxb3DCUbpO7EdgtZ6nfkiGwxthSsAEaDg4wWtzsRscEA/tbHXzCUHLjruBMV1M292UJZBt/xW4a831E3eeyKzucdRzXFPPTAXnvqjaEkhSA1E/GHLLKcsduGce+QjC0k/LxPDEoqxITxjJ8zxMU7IoYbF+/uD8tww/MOhphjXRxR19mAiPbLNp4x5Lm1sRoZ4rjMxyR4EzC+Ofyrwz3naEAGKfbYGMxNkkxejnN4xhC0Ae5wQFcKStoZd0oqvYchjPwZPuUJs/cuhnf+EKsaJDfHt30YipM5eXobrMDZxB1mMJbzVN0SssNF8RByW3Vi+GYGfGtui3OB4anaZOc+XHsXQxj6LHPGfkct/QOGfIkbYxrxtg4x5GUM7eFDCVf5AIS4kwsb7se+HOYE82nkLZrDIa746n3+eKL7nQwlE7czKmUY5as/Z6iNDPkOJ2hvtOMwMEJnA+i1FZu/ig2nEObhqHVTyCM99fiiv1BNQTmCngzWw8V3MQS7ABLS64GXqv6QIcDcxeYdw0J0GkaiGTeBDwxFw+AxzRtDDBaeRm2ivZInGJJW7NrHS++yNHyDMkyZQ8Rs+Q/nIX/lupOWUjxAPzKE1lFLPcxYXzIELeV6Oe+RUH6lpXhDlasp5V7nzxnyXZDrmgdTH2E4qSXuYIUmBD00kNBtJ00yQyz+zQZ+Ozacnt5raRAtTJ+d1pLoRTTyPluqRNwjc+f7p95CmvIg/nUDOVlTN6DHa+SRkzl1BkhxxtO8Ncgcv8dbcGDfkTp7qaTvZAhBEZ55U3ig8Z55+KrWNjIVy8HlZEsxFEEDaMPsvKKG4ITAEAydNr96nL74K48vPoNq2pyK2+H93zC8ryba4HqLQKQ+hvpxhqjvWMCtJyEwFHPAihnQbfzXddB7mvn4RV/MUsEQlfCX85DnwfBN5bFTfzuG/JkLUmUiluQW58MMgUyQ4LCJtwP4TI6BiOLsyH47ctFBiJaPcr2bI2+upL+KFvG3B4hQ78cxxDrtbxliLDmeA1Nq4Q9/EXqLBozbPJQfrjknchnVFAMRhxctfLAjmBHAEMrDGAsJQ3Th8bSRxvGRPJ7yetUqtlh4j5UR+OqVx2PSrSK8nS4hQ5EytdCXOd8NJ6IjfmbsWRaMiatt+3zeFIxXXh7URgGtyXif6jAuvSnsEKjGueaRqXuCTJFbHEVywAMnjmeXm0sLKTIZdPtpWAN9h/7i/lwwRKm2jQsmK5DDUBTbpjDHTiHWYhTf9jDninQsDdHz6K9MJ89TmP+9QemzdX1MAbOqElvOi6zKsvtTgrgfFnOHlpYtNN2L3UhgXrY5uWy2tEzPmArzGYEn86HlJsmK08bAPOSUVP1zhkoxZbHTW3KZVeJXerKshXS0SjBe2WfZ1TKHLMMI5pBUgy18b1FvWbePHZw8BzWvjCeDKOP249NpdzweV6vd7kR2jwwVWWtBFFxhTJihKOP6gkkHmIvxmuw6XTgX3P2qUHXH2/bBAOxWqxOEAE8An+7J+eHMJQbxKMjqeDrBhPYgy12tjkeQqbIUyLlRwiOoDHxJwzD/tF6RqoQRRf0D9/W8WOPr3g26Zz62CsGa53aVmjq2Mk8aLBtC1FtFNTWku1UkSaOMb5rFZWlcpb6tE7zuWS+/vngvuInhQ7OTRLoty/YkpI53lwJaD1WUOj6miHpfdWXwjpriM8DYBJYVvPrVCtMyrMeqOLcO797mIhvBh/driNanQ3uBgdJ9fH/NpJkv7jDVG1+1PleIfyen9NHd2vJ8yEWRp1L0r/zF7+8nj5W3P78Jd8pjT79W1acNvlcqwVWZn38YU5fNt8AVPtnSfNxvqRl8E6bBN/4a2niIBN6xLPO+W0RHWeMOYf6o3Z85gVshNPMWGf9WrPmfr/7hF2jfS+Miwf21uDGYg2+3HbfV8d0jVYb1G/ByjprnG25yzagpZqynJ/zgUJzn4KuSvCgyFnxIX74WNAMfqVkB/AFfjD8biN2Pu7cRgcZf+XuM0/3rOmVt1pQY9hxqT8eNtXTcY0v1CZ7t4+0M3ekuofXtDO1oMGT7YYPS3clAzblGatd6UgbhsdnyX81QrriBiDbUgIvRUOvzxxXz3iBbtiE5Bft2hmXhwH+xCAfxlAx1WtehGjdvepSEzGm72Oli8LZVyM2u10CA6TQsylM8c7FuTX5ezC7bsGbepJZGjyvew+bLD8T+KWjsSnZ/mtYe7Frt0k7NevC7kh+pPFRR3KK6BMCwH0+elJh/xRUPcoP2jMeNPBZlatdl1XZcH9Ob3FEMPO3xzQy1VGXULdhYZUzV0tYCu6yT0JcYRLYyP8EUro6lFNQZ32hRx5BMVWROeTcJxM3qwHTNpjTM6ViSrQZabjL6/T+KBaNWqS3PLvDkI7PqDn+bpawiL+WnMJGivisGXOOFkFGiuOlOX8XiPCNW2w52uK8hqjPCpFSyjYgnTNpVyVAq304Q96iV3lQb1ePWVsXWck/NknCM3vCwVlHijyY7kq+qMEkzta94qZOXQtQzQyZeQrZ+vpnKe35Z/rCfxASGVp10MSY1+DsEKh4qt10dawKx1Oe2FITZto8p1qrsEs8p2u42kMoznnPCb4eXSE307zaevwCusDmha/NjGYrkVWBS2DlzWzyg5VeqLWnXNUxZiZ0cKeiLazucVF9RScvNsCxrLjqPW+zzV34c4mO4hdhKMCb/mBRVief3SRa1uPjsZWBZvRT00T3XIL3BKohatkGI+5FESC+ZEKndUpJvd4W/A/iOIS4VSzNMLqun5qVkSmZ/ZHxfiGJA6Ol3Jzb7efnu8V8AljDDZph+KQJ8SZjX3rZCf2CKwEeri/gd+yd+KsSyiXrOb4FZSwjJp2zfZurxUBt/kCn/NIjftpD8fk3IIY86tTisr06dNE0eqfmFkF2CFVDlk0fqfwRsp027TehSBZy+om3bHl+V/5X/kcd9zQOMzeVuN+4/OwFfQFFEdQF3I0RaW3ijb1H+3Qn4AnNxB8KcFgI7Z9rJ/V8ZwhngLvrIwajtv8ZsBI9ywihiH62N/nhwrTTxhMF/Zfo9w39w/i1YsGDBggULFixYsGDBggULFixYsGDBggULFixYsGDBggULFixYsGDBggULFixYsGDBl+F/UCarFg0EMvcAAAAASUVORK5CYII="
        />
    </a>
    
);

const Header=()=>{
    return(
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <li>About Us</li>

                </ul>
            </div>
        </div>
    );
};

const RestrautantCard=()=>{
    return(
        <div className="cards">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO05NADxqEbsP9LgHkBsaPnPIMWO-H5c5drw&s"/>
            <h1>Burger King</h1>
            <h3>American Burger</h3>
            <h2>4.5 Stars</h2>
            <h3>$.100</h3>
        </div>
    )
}

const Body=()=>{
    return(
        <RestrautantCard/>
    );
};

const Footer=()=>{
    return(
        <h4>Footer</h4>
    );
};

const Applayout=() =>{
    return(
    <>
        <Header/>
        <Body/>
        <Footer/>
    </>
    );  
};

const root=ReactDom.createRoot(document.getElementById("root"));

root.render(<Applayout/>)

