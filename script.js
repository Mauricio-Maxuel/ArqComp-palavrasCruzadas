function verificar() {


    var MemoriaMassa_M1 = inputMemoriaMassa_M1.value
    
    var MemoriaMassa_e = inputMemoriaMassa_e.value
    
    var MemoriaMassa_m2 = inputMemoriaMassa_m2.value
    
    var MemoriaMassa_o = inputMemoriaMassa_o.value
    
    var MemoriaMassa_r_rom = inputMemoriaMassa_r_rom.value
    
    var MemoriaMassa_i = inputMemoriaMassa_i.value
    
    var MemoriaMassa_a1 = inputMemoriaMassa_a1.value
    
    var MemoriaMassa_d_dma = inputMemoriaMassa_d_dma.value
    
    var MemoriaMassa_e_quadcore = inputMemoriaMassa_e_quadcore.value
    
    var MemoriaMassa_m3 = inputMemoriaMassa_m3.value
    
    var MemoriaMassa_a_databus = inputMemoriaMassa_a_databus.value
    
    var MemoriaMassa_s1 = inputMemoriaMassa_s1.value
    
    var MemoriaMassa_s2 = inputMemoriaMassa_s2.value
    
    var MemoriaMassa_a2 = inputMemoriaMassa_a2.value
    

    var memoriaMassaInput = [MemoriaMassa_M1, MemoriaMassa_e, MemoriaMassa_m2, MemoriaMassa_o, MemoriaMassa_r_rom, MemoriaMassa_i, MemoriaMassa_a1, MemoriaMassa_d_dma, MemoriaMassa_e_quadcore, MemoriaMassa_m3, MemoriaMassa_a_databus, MemoriaMassa_s1, MemoriaMassa_s2, MemoriaMassa_a2]

    var memoriaMassaCorr = ["m", "e", "m", "o", "r", "i", "a", "d", "e", "m", "a", "s", "s", "a"]
    
    if (String(memoriaMassaCorr) === String(memoriaMassaInput)) {
        inputMemoriaMassa_M1.classList = ("inputDisabled")
        inputMemoriaMassa_e.classList = ("inputDisabled")
        inputMemoriaMassa_m2.classList = ("inputDisabled")
        inputMemoriaMassa_o.classList = ("inputDisabled")
        inputMemoriaMassa_r_rom.classList = ("inputDisabled")
        inputMemoriaMassa_i.classList = ("inputDisabled")
        inputMemoriaMassa_a1.classList = ("inputDisabled")
        inputMemoriaMassa_d_dma.classList = ("inputDisabled")
        inputMemoriaMassa_e_quadcore.classList = ("inputDisabled")
        inputMemoriaMassa_m3.classList = ("inputDisabled")
        inputMemoriaMassa_a_databus.classList = ("inputDisabled")
        inputMemoriaMassa_s1.classList = ("inputDisabled")
        inputMemoriaMassa_s2.classList = ("inputDisabled")
        inputMemoriaMassa_a2.classList = ("inputDisabled")
    }

    var Rom_o = inputRom_o.value
    var Rom_m = inputRom_m.value
    
    var romuser = [MemoriaMassa_r_rom,Rom_o,Rom_m]
    var romCorreta = ["r","o","m"]
    if(String(romuser) === String(romCorreta)){
        inputMemoriaMassa_r_rom.classList = ("inputDisabled")
        inputRom_o.classList = ("inputDisabled")
        inputRom_m.classList = ("inputDisabled")

    }



    var Ula_l = inputUla_l.value
    var Ula_u = inputUla_u.value
    var ulauser = [Ula_u,Ula_l,MemoriaMassa_a1]
    var ulaCorreta = ["u","l","a"]
    if(String(ulauser) === String(ulaCorreta)){
        inputUla_u.classList = ("inputDisabled")
        inputUla_l.classList = ("inputDisabled")
        inputMemoriaMassa_a1.classList = ("inputDisabled")

    }

    
    var Quadcore_q = inputQuadcore_q.value

    var Quadcore_u = inputQuadcore_u.value

    var Quadcore_a = inputQuadcore_a.value

    var Quadcore_d_dualcore = inputQuadcore_d_dualcore.value

    var Quadcore_c = inputQuadcore_c.value

    var Quadcore_o = inputQuadcore_o.value

    var Quadcore_r = inputQuadcore_r.value
    var ulauser = [Quadcore_q,Quadcore_u,Quadcore_a,Quadcore_d_dualcore,Quadcore_c,Quadcore_o,Quadcore_r,MemoriaMassa_e_quadcore]
    var ulaCorreta = ["q","u","a","d","c","o","r","e"]
    


    var Dualcore_u = inputDualcore_u.value

    var Dualcore_a = inputDualcore_a.value

    var Dualcore_l = inputDualcore_l.value

    var Dualcore_c = inputDualcore_c.value

    var Dualcore_o = inputDualcore_o.value

    var Dualcore_r = inputDualcore_r.value

    var Dualcore_e = inputDualcore_e.value
    



    var Dma_m = inputDma_m.value
    
    var Dma_a = inputDma_a.value



    var Eprom_e = inputEprom_e.value

    var Eprom_p = inputEprom_p.value

    var Eprom_e_registradores = inputEprom_e_registradores.value

    var Eprom_o = inputEprom_o.value

    var Eprom_m = inputEprom_m.value


    var Databus_d = inputDatabus_d.value

    var Databus_t = inputDatabus_t.value
      
    var Databus_a_ram = inputDatabus_a_ram.value

    var Databus_b = inputDatabus_b.value

    var Databus_u = inputDatabus_u.value

    var Databus_s = inputDatabus_s.value


    var Registradores_e1 = inputRegistradores_e1.value

    var Registradores_g = inputRegistradores_g.value

    var Registradores_i_15 = inputRegistradores_i_i5.value
    
    var Registradores_t = inputRegistradores_t.value
    
    var Registradores_r = inputRegistradores_r.value
      
    var Registradores_a_flash = inputRegistradores_a_flash.value
     
    var Registradores_d = inputRegistradores_d.value
      
    var Registradores_o = inputRegistradores_o.value

    var Registradores_r_adressbus = inputRegistradores_r_adressbus.value

    var Registradores_e2 = inputRegistradores_e2.value
    
    var Registradores_s2 = inputRegistradores_s.value
    
    var i5_5 = inputI5_5.value
    

    var Adressbus_a = inputAdressbus_a.value
    
    var Adressbus_d = inputAdressbus_d.value
    
    var Adressbus_e = inputAdressbus_e.value
     
    var Adressbus_s1 = inputAdressbus_s1.value
     
    var Adressbus_s2 = inputAdressbus_s2.value
    
    var Adressbus_b = inputAdressbus_b.value
    
    var Adressbus_u = inputAdressbus_u.value
     
    var Adressbus_s3 = inputAdressbus_s3.value


    var Flash_l = inputFlash_l.value

    var Flash_f = inputFlash_f.value

    var Flash_s = inputFlash_s.value
     
    var Flash_h_chip = inputFlash_h_chip.value
     


    var Chipselect_c = inputChipselect_c.value

    var Chipselect_i_i7 = inputChipselect_i_i7.value
     
    var Chipselect_p = inputChipselect_p.value
      
    var Chipselect_e1 = inputChipselect_e1.value
     
    var Chipselect_l = inputChipselect_l.value
      
    var Chipselect_e2 = inputChipselect_e2.value
    
    var Chipselect_c_cpu = inputChipselect_c_cpu.value
     
    
    var Chipselect_t = inputChipselect_t.value
    
    var Cpu_p = inputCpu_p.value
    
    var I7_7 = inputI7_7.value
}