import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaShip, FaArrowRight, FaChartLine, FaGavel, FaBoxOpen } from 'react-icons/fa';

// IMPORT LOCAL ASSET
import bgPattern from "../assets/bg_pattern/image.png";
import Topfooter from '../components/layout/Topfooter';

const SERVICES_LIST = [
  {
    name: "Advisory & Consultancy",
    slug: "advisory",
    shortDesc: "Guiding international companies through Ethiopia’s complex legal, regulatory, and commercial landscape with actionable, pragmatic recommendations.",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA5QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIEBgcDAQj/xABDEAACAQMDAQYDBQUHAQgDAAABAgMABBEFEiExBhNBUWFxIoGRFDKhscEHI0JS0RUkM2KC4fCSFjRDU3KiwvElRFT/xAAZAQACAwEAAAAAAAAAAAAAAAACAwABBAX/xAAmEQACAgICAgMAAgMBAAAAAAAAAQIRAyESMQRBEyJRMnFCYZEU/9oADAMBAAIRAxEAPwDaRTgKbTxRijylXpryqIe5r0U2vQeahaGrw75PjXrMoKqSAW4GfGvCBvO7GDXrbcAnHHQ1CFQjw5vrc+DNj5E1DYF+x9wp6wXAI9MEGjLaZMupzTq0fdSOxOX8CKamkOumajbNPCBOcqd2QnHjW95I2n/Rj4Omjrpz4voT5gj8M0dLH+U/Oq/bNaW8kLtfwExfewc54xRQ6zYf/wBKn2BNZ832laC8f6wpjr0kxoSuCsikfWpy/cPvQqXU7O4URiVuWBBCHzqDqPbns1pjSw3OqRmWP7yRqzkHy+EYz6ZpTix8ZJtlji6GuSDhvc1XtF7edntWlENte7JGOFWdSm4+h6VYo+SR5mq6I90RQf3nzruwyKZLGVcEeNd9uEzRNiIwdtEfbndXYjCYp8Sg5pl0CEyoqrtl8OMHIjiMBjhfnXUdK5yq/wAKjoRzXRUwlE2KjFp9D404p5XFOiGFpPS72a4xSiM8KcG2jmm+FeYzwasq66OExG750Jul/vTfOic2FfHrUGcZuW9604tMyS2zqpwoGfCvKdsB60qsSE69JCqWYgAdSfCo2oXkGn2Fxe3cgjggjMkjnwAFfM/b3t7qXay+lQSy2+lA4is1bAI83x94/gKzJWdVH0PcdruzkEvdTa5p6v0x9oU1OsNW03UsjT9QtbkjwhmVz9Aa+PAccDpXaGRo5FkjYpIpyrqSGX1BHIq+KIfZFIdaxD9m37RNZS7jsdXE+o2TsE78rmSEk4GT4r5+PvW3+ooWidELVAcLyelQ1mSKyldzwrDkmiGoLmNTVU10SS2U0MKys+MhY/H3orqNozZJcWTZNXsxGsneggnbwaIWRWZW2t8Lgcj3rHrOHtApa2Gl3jtv3BhERgfOtL7IJfww7dRUo5Q/D5ePPrQQyTk6khUJ3LZZ/s0KAkQwj2Wg2ndpNF1DUBY2MwkuDu+EW7AcdeSMeFWHwpqxgHPQeVXf6bOP4Z/+0vUruaS37OaUQtxcL3txIOO7jB4+vP4edZ/f9iLmGwC2k3fFG3MAMEmjupa5CvantDPPvYCaOFCoB2qAR0z04olY6jbQsk01yI4+u5+lZ8mScXo3YcUHHZnWl2LpIFIPDcqfyrdOxOoG5sVt5nLyRqNrH+JazHtDJaJrj3VjKj284WVTH0z4/iCfnRvsdrAg1K3Xdhe8aNh79KuM5N7Ay448dejVWBKjOKRzsxXKT/DHvXT/AMGnmHltnsefCnvgrgmo4zt60+Q/Dz5VGtkjP60PYDj0FLKkda8LDaCfKoWr38OmaVc38vKQRl8fzeQ+dUF70d7y+t7JA00mM9FAyTQ7+30myYIfhHXecH6Vn0T63fRNc6neiO4mJbuwOI1P8NSrO6CSLBNM8r46tx/91nyZXF6N2LBa2XZdaztxEpzxndjmiMVwkp28q5GcHx9vOqZAjSMQQDETkY/hPX+tFtNldI1WT4irYB9vH6YpUfIknsKfjwa0GJYizKM4weaiSD98T60QQd/Grg1CkXEzDOea6mOVnGyY3Bux2KVPMZPnSorQiijft7vZrXsTDBExUXV6kUuPFArtj6qK+dzX0r+2vSm1TsFcvGpaWymS6UL5DKt9FZj8q+asEk45xSV0dVDl5NGdI05blw0mRHnqOtB4uoo/pkj24OGG0+FDPoPHXLZqHZWzsY7VBZgIy/e9a0vQ7w3EBjc5ZKxXs1fxIe9lmWNB68n5Vo3Y+9fUdRie1BW1CMXJPLYwAB6c/hSMcnF8Wac8OceS9F0uV3R+1DLUbbpyImORwcUVmJWJiADjwNDre8dp+6KIAfIVpjdHMnVoJYBTJHOKHwxkXH3GHXmpQ70pkOo44+GmoJcgtIPktRaCcbJMbZQY8hSkkWKN5HOFQFifLHNCIkvLiSVvt8kKK5VUVF6D5UC7fSyab2U1KZ9UmZ3geNEYKN5Ixj8aFotT/wBGVaVFaa9/aepSPh/tPeA9TtbJH6/Srzc9mbObsglsbloiDhpQcnJPANZj2DuRFrE9kWT+8whU3DgspyPwJrQdG+3f3kTW0ckbNwxZgMfiPWseW0zq4EpRKr2osDpNzCBKWEigbfBccfrTbC9aN2mQ423CMD5EqP6GuPbq676/VN/EYIHyrh2fhl1GZbWMHdLPF8hnk/jRwdpMVmSTdH0daOtxZW8gPDor/UZqQxTbtJNcre37mCKGPG2NAo9hTzCx8RWhUc6pJ6Q3egGMmvHkibg/nSNsx8RXn2U/zfhRfX9Aqf4JpU2Yx0HFVntm4NhBFL/hNcx7wPHByPlmrL9l9aAdsUWKyQkZIcEcZocjXB0Mwxk8ibRU53LOQDnnnnpXKBIjeRCZWG44WSM/Ep8/WhrRXhuvtMUy8HBRlyre/wDzxqeweUIxXawYEbfP0rFNKjrxTLHJvtpoi4UrJ8JZehPGDXeGZhG7DojofkRz+dDdW1AS2kSgjchDZHnzmp+mfvXmRuu2Jx6g0gjsscM0sVgHAA+I+FRFnUy7nbGaK2yhkMbAbcU2O1ggck7c+prq+PkShs4/k45Odo8+12n/AJn/ALTSqRutx/FH9RSq7X4yuH9DZu77lxOVEZXDluBg9c18l6jY29rrGpWzqjrDcyKpRs/Dn4cY8Oa0b9oOvXOraqjR3MqWAzHFFuITPg7L0OfXpVE1aFWuDPaLhUi2v5kL1Y014ZKFhwyLlTBDWyd2ssOdueQfCiWnCOSRY5G2g+NR9yupBGCRyK9tFIZcNWe9GqlZpHZbsxvt53JSWOZdocMQU+VSuxGvx6ZrT2ySBrBJTHvc9Dk9PpVd7P69LprlWkIXHIzzRHRpbS71ffYWVvbx5Jdn2oeepyfH2rMuXI2fTg0beLu3uYysMyOWXIAPJoavw3cZ6fFVSF3LG5khYl4iHTnrjw+Y4q09+k0dvdRncsmGGPEV0EqOJk2GouYyD4ZFeCuUcj92zKhOW6Zx1pTyGLDYygBLnONoAzmltbGJ6AGp9ozpcstvFGC28kO3NZ12t1GbXGaK8kZ8ghcLnZkeA96JajfC8v2yTvBJZT1ofNCjXEbqQUlyjejdfyrSoRraE8pXozeTS7y2uVkB2NG25ZI2+7jxq/6Pq+pd0FadsN97gc1Jj01Li5WBlGH4HHnXfQNLV7sRO2UKcZ8/CsPmQjFqjpeFJysj69ods+nPqUrBcIGYsfvHy/L6mjf7OOzsNjYNqs8QaQj+7ljgcL198k8+lCu1i9z2TaN2/eLIRg+PPFaKxW30i1AwqLAgwPAAUjCr7HeTro7/ANoudFe5yUdVZSv8rjgj5EUbViyBgetVCIAaXHDJhWmSS6lz0GSW/WjOh6jHdwKA/OAAK09GJ7CpJ/mNcy7A/eNPPjTTRoQ2xm8jnc9DdbtmubWQRpvk2kKWbHNFcmhPai/bTtEnuI22yEqit5FiBn5Ak/Ko48tFRk4uzPbJJCWW4jRSeco+7J+gxU0juYiRw4GRj9KBz61dC1WW2gjaTkyFlOPqDTdE1W71Swd7zalxHIVZVXAxnjjnwrnZIOLZ28eVTjaJjSlX2HjOA+egyRn8P1qxdl7jvhJM2endrnx5J/CqfcXrpci3aDK8ZfP3v6UYgvJoXtLe1K97O+MJ/Ag6/Ums7sOkzTbWTcV/zDNc7vLc4BIOBmh+marAW25z5H06ZonNHvTvEOR+VdPxHS2cryo/hB2t/Kn1pV0OM15XQOdRjet2L3cJSIEEHcvHjVURpYJQw4ZDnOPGtOjiS4iBOD5MKrOuaTIurRpDbbknBYuD9wjrkeXSmRnuhnEr132ee4tH1PRY2lgX/vFsoy9ufQdSnl5UFiDxkMOfH4a0DRRc6NqizwDI6OnTcKKdvX05IrW7s9Kiac/vJrlUA2+h9epz6UjJht/QfDNX8jOby01m27l30m+TvVDxubZyJF8xx6j61Yuy1pqUrd+dOeIoM95cKVPqFU+NXGx1q5u9P0+e4kaaNH7tZT1AYEEH04X6VKlmQtu2gSZ+9jk0r4vbGSzNdEPR737TLsfCuDgKeoq0dmL6O3t5bS4QsYZGCeg6j8CKpKjue0AeP/DkOfajlpN3d+0mfh3c+pwB+lMaM5fnukjAOxjuGetQtWugdLuZDE2zYRnIpskge2hdTuBjGCPGuOoszdnbnaRkdaCkmi7bTMznxPckZ+NfiQgYZP6iuGiz/wBoW1/GhHfRsHTH8y8H8qLQxI8uyUpG4PXeCrfqKquk3os+1OoBc7O9wQRjPHNPb9AJFstZlN5Z3Sj4XKtg0Tjtjp9w6yK6LvYISOCM8YPtQSMoY3iQ5KPvj9jWhabILqwinU5DoNyHzHWs3kYudGrxs3x2Z52ttLi/gVIVYQ7xukbhevQeZq96qx+xwQL95lWP/nyFCe0UTXF/aQsQE7wHb4daKPIst3G5I2oc4oPiWNJBSyvI7BXbC8/s7Trx1Gf3CWygDJO484+tCux+rPFcCN93xc4YYP0q6WVvFdrO84BSQMuD68H8qouo2P8A2e1KQzSPMGBMbjgsDTIpNUIcqkahZ3qXURcKQV4ruTVV7H6xFNamJo5Iypyc8g5o/NdrCASy4PTJoYr0yTXsl5qqftFu4l0KS2LgzOQ2zxxRc6vECBuXnpzWZ9tdXF5rpCnjHddevB/UmnQjuxTYEjkdERQeDH08M5orpkaw20csSgiQfHjxNDJE/dxkddh4+eaKabMqxRxNxuUsmffkUny8a4po2eHOpNDp7K7nulNmsLA/e7xwAKc5l02yvL6zUXUsS7Gm/hUdOB5ZJ5qSbuzSVY7suEbqI/EeVCr++LpJZ2CCG0kbbtKjLDPGa58MGSUlrRtnnhFO3sL6NqMkYgRyWuJgGJ8l9vWtD0q/jeCJCSwY7CfM+dY7BcH7XKQ+3LmMsP4UU44rRezcgljS5ZhHFGNsaucYHiTXUeKo6OZztljlQo23qPD2pUy7guHWP7IQxGd2WHyryrU1QqWN2ZV2R1ETKbaVvjTkZP1qy3EBlwqPskXlGbkE+RHkap9jNYTXUTjNtfRncVddu8eP/BVyLd7EjqM8UeTu0SD0RI7aK7dlaPuriL76k8qf1Hkf14rh2rVoOz7k4xjaxx0z/X9amPc7Q0hjLzQoSjZwT/lz5e9c9caPWOyc8ln8SXFt3kR8zjcvtzjiqjNxkmG0miqdlJ+90XXNJAHex/vrUe3xYHr1o49ws9mlwhG10Dgj1FU7svdd1dLPn4ZQN3qMUa00tHoskC5Y2rtFg9doOB+GKsuXVhGzBluI5COQcg1Js5915PGx/eCQqF8F9a4aMxNvCyYYsDgHw58aE3N6bTtFeQK2cOM+ZOBUq3QBfbKEXUcdmbp4e5Hwc4GPKufaAzaXoy2cFzuWaUmSUkkqo8B6mq7DqrT4ETN8Rx8Hj7E9al9orqZ7WxYo5KscbW4zgctj0zQRglKySk6o52VlA9s3fQryPvOozmq3e6S5vJLuE7yoAbnlgP6VZbVrhLZ5ne4l8HQQ5HTr5j3odNIiWrmMs0pYklRnA+VFHcqBnqIOgmdCrE/d4PtV47L3/d2EkRkztk6+GCKzz7dCcBnw/QkKeaL9n9Rj7023erskGEbPAPhmpJbJjnZY9UvxLq0QVgRGpLHyzUrT5mvAFjwCepHhVMga4mvWtth+0u5MijnYPAfTFX7Q7NbWBYVO5nPxv5+gqcb2E51oONZhLaDZwu08HxoR2h0wXmmMyoGkhG9B+Yqz3WGt4yACQcVGKBY8uyqPEt0pKW7Lcl0ZbpeuSWFy0MUcs7+URI2ny9asU3aKZliOp24t4GPEsm4bD05PI/6tte2ulWdpfXU0FvKO8kLKWXIx/Sgna/UJYO7ghRJhKTG8LHCsp46/w4/Kj4qTJbSCXaO+bTLX9wC0zLwVThR556ZrLbu7aW43Z+MN9DV21Ha1lHFbXglEShCA4IGBjGOtBNH0VdY1VbcoVlDZIz1H/PH0rVDGooU5NnUFngjZlIYqDg+tFdMt4L7SmiuE3Krk9cEeoPhRftxo0dpZW93Zx7UgURSKvgv8J+px86p8V68MTxo2BMQAfI0qaU40Hjk4uyUyp3rLGzGMHCl2LHFJQO+yQMLzzUYS49BXKa6wpApkUkqRTbbti0tA09yxUuUlJC+Azzn65q46FDFI/wDfLlUBGVQklSfXzqiafM0V/n4tkvwnHn4VfNGJMyLHGGC4A4zihfQSNHsxIkChZFkTACngYApVF04tHCY+6dQrcADPFKsjWx6ozVtGttZse7dgHUfC+PiU+YpnZv8AtHTbyXSdWYPu/eW8y/ddcDPsfSu2nxrJtkEjxyqfvIaL3MRmtlldVMsDiRWA+8Oh/CtE7EI4Xg2HIGQRQ3srN/8Air2yY/8AdbiRVHkrHcv4NRW5HeqSgyOvvQTQv3ep6xGBgFI5fn8Q/Sl+g0UjSG2q2PCZ1+hoxp953U+o5IIyHx7jFQbqEW2o3sZ6d/uH+pRUMb21ZVB2idAv0pyBb0XnskVOlxuxwxZiT/qNUztGlzZ9q7t7qOSI3Td5GT4xHjI98Yqw2t6bDT2QI+Ez8W3HX/c1eO1fZK317s/aTCN21K0tP7synGcgEqfPpxSnLiy4q0Z1ouobZw8nwKCA2Bwijwq9AwahayRD+DDKwzgHw/3HrWYWxYSASswiR/uZIGfM1bLTtFFpUcMVzMPiw2xF3MM889Of+cUybVWwYK3SJ1jr13aXEltJHtkH+KW4yfJf60bt9aBBd59hbrtHX3oDc3lj2ldJLKUwPGNomdBj2b+tD7zQ+0ljKGFvb3kOc/BlTilpxkrQUlKDqQX1vtMX1CHS4JZO6I33DqxHsnz8f96kRfZbmRW+wWsk4UPtZRll8g3nVVGh3Wqagri0uLN2wJJWP554+lXW57OR21vbHTp2knt1AYSNhm4wSD+lZckJ3aN+HJjaSZ0sbjTri/a3lhERlYOkiqFbH8pPp0otPrvZvTGWKTU7ZJCSFjD7nyOowOcjyoOulT6lIkrRtbSxkZlk43Y9s54q2aZDb2FmIl2O4JLPsCs2T1NXic+vQHkwxdrsAnt1ZtqENnaWt2yMDunmtpI1B8MBgCc/SpFzqYGnXF1cb9sOZG34UgDqB8qG9qLVmuJLy2ncOx+Jd2CPY9a4T3CPolytn3LySQug+AsWYgjkn3oMjyKQ3HjwvGdWv4NWsVuLKQyxum6NgSpOenXGKbBKlmttbvbrJcvEzs2wNjHhuqtdnvtOjaaI73JnRO6QdQieBHrxRnSL681KVmSBxFF8EYZCoK+pqpvI2FCOGMf0H9pbdkuIbtRtbcpGDksD95T5j+vpXbsnb3MCC6ePbLg4A5KjOcUYurPu5DcX0Eryf+EDzGPYjgfPFTdMmljnWVB+7PBWMHao960ryXjjUuzFLxvmk5R0iVrTPqnZu7jUBZGiIzjNY9c2F9aqyzRbkH8SeHkcVutxIPs8jBeNjdD6VUZb8BpMkqR4UePMp6SFT8f4+2ZpFerKgL8HOD4c+X613S3luHKRxyFxg7Qhzir7bagrxSuQkhTDbJFz4+ftUqAyzLbzWELSAPhowhJXnII496NyYKiU3TtKd1IaNwemSpByOak20NyLnuJy4w2RhtgceYrR7fTb12Z7nu4FJ/ibJ9wBUhdJ0+MDvkNwQd3xcAHzGPl9KnMviCdHtkjt8ZuUyAcCVj+RxSqxpcdyuyCOONB/Cq4FKqqT9F2jJNJu2OwgL8XBFWq3l3hU3bsjB2jPhWZWN6bYHY2WJ6+XtVn0nWe5lktz8JQDJHgepX8uadONiYyoJ3E32O6eIfdzlc+VQxPBHfTSBlV5Y0TrjJBOPzo5b6jFOpV1VwB0IBrvaT6fZDNrbQrI3JKoM/Ws7jJMbyTKRrXZfXZNZlWCzkue9RG78YVfEYySPKpVl+zXV7jYby5gtdpDAplyPyFXey7RfaWucJGqw4XcPM+FIdopBCxbauSQvmB51b52T6kSPsRbGLF9dXN1xgpkIv4DP403tNKllo+25upEt4lCABySfAAeZqWNSe5AHet8RA4aoH7XrZf+yUMgUZguozkDzBX/AOVC7itkjFSdIyiCe3a+b90xjfO1GbBJzVjvdOsbixjlOnzSoTmVli2zRE9TjnPuM1To9n2qN3BKhhmrut4FhZYnuQu3AWMZH5GseSbZ1MGJLor9pEdGmnh+0Fp5FAtj0DAng49utal2O1rvQmm377peFhk28NnwPrVeg0mw1GRZXtFmZl2rMuVZCPE/XrU/s3oGrQSmfvJkcuSJQy7cdPhwTxjxo8cG2nZMnGScWui6XFpEXYSAxnwJGFPz6V5Jp27Eitgkc8VIglntbZY5Vlu592CVA9OCf1qVFski3920A53K4xt/StO0c3ikwfFaOi8sTXOe2lJABIFFRGSoZdsiHoaW1f4gV96rlRdNgZtLSbl2JPtUq3sI4Yu7VBt9BRMRqMH06U8KPKhcmwkqVAo6dC3JhjP+mnLpsQ6IF9qKhBS2ipZKK5q2lXbW0gtzvPhG33W96gaXp1++03UM8mOBHgxoD+ZFXTHGK8I54+VLnHmNx5eCoAy6XqdxEyfaILcEY+BC5A+eB+FBpuw0jtuk1uVfMLEn9KtLO0k5YEhV4AB60/HjTIQ49Cck+fYE03szplgn7wzXsnOXnYAHPouB4nrRdHEKiOGNI0HgigU4jmuTcGmJC2x55Gep8zTDXqnjFIqT0FMWijmTSruI0UfGwz5Uqr5EXR862x2zo4H3ck5qRFI2SxJ3MSSfOi+raBLGJLmyhJGcGIePqKCst3EcPY3A/wBGfyrUmzOthO2vJIzySR71OOr92m4j5VXftJXh4ZV94mpLdxk/4c7H0ib+lR0y6LJp2ovHBMrYHePvbzNPk1At94ZPnQHvbxoi1tp19N/6LZz+lRmu9SL7E0q7DZ6NC4I48Rip9USmW3TtTcXduD0MyA+2RV57a251DstfwKNzbA6jzIII/Ksi0a6uLmVI0j3XKPhkQEkEHxHhWsW9nql3aol46IPERqRn35pObjQeNtMyVez94sbTvBKY15IRCx+lWPs3pmkamjRWeuP9sX/9eQmHBHmDzj2rRLPRVjYFixIr3UuyWjaooN7Yxs68iVRtcezDmsKhBdm355vrRHh0qaxtI4Zo5L+Rm3ddqK3kfHHXqMeZFFlt3uoYZX7y2ZPvwuFKnzyASCPmaDR6Pr+ioBomp/a4B0ttRG7j0YYI/Aehrvb6x9suUstX028sLzwKgtEfUN0/p6U9daEym3sMXOoLD8KISeuSMD/f3ptoUv4ybhC5Vv4s7c+1Ps5UuFAhlhuYRxvRs/qc/Wn3t7b2EEks7KoXkqOSfkOSTUtdIBJt2zpBbRQnMSbSepyefevbq5W0hklkViijPHJY+QHiahWF/c6jarJb2Ulru3fFdLjABwCFHXPyqZBZxxt3kjNPP07yQjI9h0HyFKbdjUgXajWdQuVuJXFhag5WEAM7D/NmjaOrrlGB8KbIm8Yz86ESwXdjM0sDFlJyVNWkpAtuIbzSxUOy1CK54JKyeKmpefPgeg6+xqPRapjsetMuJFSJv5ugr3OD9Ki3B7yUL/LUW2R0kNjXaoFOrzPFLNMF2KmMBXpauLSk/cUt6+H1qLRDopUHxrtGAfiJCjzJqHtduXYKPICq/wBpLm7sblLyxlUxIgDRls85PJHzq1FzlRdpK2W9I7WMYVGbPOaVVKw7b2TQ/wB6jdH/AMoyD7UqL/zzXonyInwW8ZtgCPvMc/WvfsFsTzGDSpUTbFro9/s+1/8AJX6V3hsbUdIE/wCkcUqVDyZdHYW0PQxg+4rvHDGsgwo6UqVC2WUfsHCkXa3tlCijYuobh6ZzV8AAHAxSpVWX+X/A0e06lSpRY4Un6oDyD1BpUqi7I+iA/Z3TZLr7QImikUYBicpj6VJj0+2tpHdI9zO+WZzuJwKVKitgIkg8Cvc0qVANPaRANKlUIwPqdtGhLplWXnINddGupJ4wsuGGccjwpUqd/gJX8gk3wMVHT1qEpzk+JNKlQwCmemucjEcDilSpjFnqxr8ORuyM810ApUqWxkRrgYqm9vLBLjS2XvZYsuMmNgCR5dKVKm4XUipFUfszY6ciR20lztIyd0mf0r2lSrW5OxJ//9k="
  },
  {
    name: "Market Assessments",
    slug: "market-assessments",
    shortDesc: "Comprehensive field intelligence and data analytics to evaluate demand, competitor activity, and government procurement pipelines.",
    image: "https://www.shutterstock.com/image-photo/business-2025-graphs-statistics-analyze-600nw-2469749585.jpg"
  },
  {
    name: "Import & Export",
    slug: "import-export",
    shortDesc: "End-to-end support for regulatory compliance, documentation, and the efficient movement of goods through customs and logistics.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Sourcing & Supply Chain",
    slug: "sourcing",
    shortDesc: "Full-spectrum sourcing, rigorous supplier verification, and supervising procurement workflows from production to delivery.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  }
];

const ServicesIndex: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F2D6] font-['Montserrat'] selection:bg-[#308667] selection:text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#387663] pt-40 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url(${bgPattern})`,
            backgroundSize: '150px 150px',
            backgroundRepeat: 'repeat'
          }}
        />

        <div className="relative z-10 container mx-auto px-6 max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-black text-[#F9F2D6] mb-8 uppercase tracking-tighter leading-none">
              Strategic <span className="text-[#0B1A13] ">Trade</span>
            </h1>
            <p className="text-lg md:text-xl text-[#F9F2D6]/70 font-bold italic inline-block pb-8">
              Maximizing profitability through 20 years of localized intelligence.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-[#F9F2D6]" style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}></div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="pb-32 container mx-auto px-6 max-w-7xl relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_LIST.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -15 }}
              className="bg-white p-6 rounded-[2.5rem] shadow-[0_30px_60px_rgba(18,44,33,0.08)] border border-[#122C21]/5 flex flex-col h-full group transition-all duration-500 overflow-hidden"
            >
              {/* IMAGE AREA - Color filters removed */}
              <div className="relative w-full h-44 rounded-2xl mb-8 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay removed to show normal colors */}
              </div>

              <h2 className="text-xl font-black text-[#308667] mb-4 uppercase tracking-tighter leading-tight px-2">
                {service.name}
              </h2>

              <p className="text-[#122C21]/60 mb-8 grow font-bold text-[16px] leading-relaxed px-2">
                {service.shortDesc}
              </p>

              <div className="px-2 pb-2">
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center text-[11px] font-black uppercase tracking-[0.3em] text-[#308667] hover:text-[#122C21] transition-all"
                >
                  Learn More <FaArrowRight className="ml-3 group-hover:translate-x-3 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= THE PROCESS BLUEPRINT ================= */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <span className="text-[10px] font-black text-[#308667] uppercase tracking-[0.4em] mb-4 block">Our Lifecycle Management</span>
              <h3 className="text-4xl md:text-6xl font-black text-[#122C21] uppercase tracking-tighter mb-8 leading-none">
                Strategic <br /> <span className="text-[#308667]">Execution</span>
              </h3>
              <p className="text-[#122C21]/70 text-lg font-bold mb-10 leading-relaxed">
                We combine international best practices with localized field intelligence to ensure every business decision aligns with Ethiopian regulatory frameworks.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Market Entry", icon: <FaChartLine /> },
                  { title: "Legal Navigation", icon: <FaGavel /> },
                  { title: "Logistics Control", icon: <FaShip /> },
                  { title: "Supply Integrity", icon: <FaBoxOpen /> }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 border border-[#122C21]/5 rounded-2xl">
                    <div className="text-[#308667] text-xl">{item.icon}</div>
                    <span className="text-[#122C21] font-black uppercase tracking-widest text-[10px]">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 bg-[#F9F2D6] p-12 rounded-[4rem] border border-[#122C21]/5 shadow-inner relative flex flex-col items-center justify-center min-h-[450px]">
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                <FaShip className="text-[20rem]" />
              </div>
              <div className="text-center relative z-10">
                <h5 className="text-[10px] font-black text-[#122C21] uppercase tracking-[0.4em] mb-8">Integrated Trade Model</h5>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-xl shadow-sm border border-[#122C21]/5 font-black text-[10px] uppercase text-[#308667]"> Assessment & Analysis</div>
                  <div className="p-4 bg-white rounded-xl shadow-sm border border-[#122C21]/5 font-black text-[10px] uppercase text-[#308667]"> Regulatory Compliance</div>
                  <div className="p-4 bg-white rounded-xl shadow-sm border border-[#122C21]/5 font-black text-[10px] uppercase text-[#308667]"> Operational Logistics</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Topfooter />
    </div>
  );
};

export default ServicesIndex;