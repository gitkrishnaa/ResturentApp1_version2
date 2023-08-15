# when on click on rect icon which is in button, it work as expected
problem- i have used button and react icon compronent in button
so i click to get id of button,it click on icon which not return id,becase id on button,icon not accepted id,it is imported component from react-icon

solotion (what i have use)- i have use div which cover button ,using prosition absolute,background -transparent
then onclick eventlisner on this div,working fine