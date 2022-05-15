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

        dica1.innerHTML = `<del>1 - Tenho como função armazenar grandes quantidades de informações</del>`
    }


    var Rom_o = inputRom_o.value
    var Rom_m = inputRom_m.value

    var romuser = [MemoriaMassa_r_rom, Rom_o, Rom_m]

    var romCorreta = ["r", "o", "m"]

    if (String(romuser) === String(romCorreta)) {
        inputMemoriaMassa_r_rom.classList = ("inputDisabled")
        inputRom_o.classList = ("inputDisabled")
        inputRom_m.classList = ("inputDisabled")

        dica2.innerHTML = `<del>2 - Não permito que me alterem</del>`
    }


    var Ula_l = inputUla_l.value
    var Ula_u = inputUla_u.value

    var ulauser = [Ula_u, Ula_l, MemoriaMassa_a1]

    var ulaCorreta = ["u", "l", "a"]

    if (String(ulauser) === String(ulaCorreta)) {
        inputUla_u.classList = ("inputDisabled")
        inputUla_l.classList = ("inputDisabled")
        inputMemoriaMassa_a1.classList = ("inputDisabled")

        dica3.innerHTML = `<del>3 - Sou o rei dos cálculos</del>`
    }


    var Quadcore_q = inputQuadcore_q.value
    var Quadcore_u = inputQuadcore_u.value
    var Quadcore_a = inputQuadcore_a.value
    var Quadcore_d_dualcore = inputQuadcore_d_dualcore.value
    var Quadcore_c = inputQuadcore_c.value
    var Quadcore_o = inputQuadcore_o.value
    var Quadcore_r = inputQuadcore_r.value

    var quaduser = [Quadcore_q, Quadcore_u, Quadcore_a, Quadcore_d_dualcore, Quadcore_c, Quadcore_o, Quadcore_r, MemoriaMassa_e_quadcore]

    var quadCorreta = ["q", "u", "a", "d", "c", "o", "r", "e"]

    if (String(quaduser) === String(quadCorreta)) {
        inputQuadcore_q.classList = ("inputDisabled")
        inputQuadcore_u.classList = ("inputDisabled")
        inputQuadcore_a.classList = ("inputDisabled")
        inputQuadcore_d_dualcore.classList = ("inputDisabled")
        inputQuadcore_c.classList = ("inputDisabled")
        inputQuadcore_o.classList = ("inputDisabled")
        inputQuadcore_r.classList = ("inputDisabled")
        inputMemoriaMassa_e_quadcore.classList = ("inputDisabled")

        dica7.innerHTML = `<del>7 - Dizem que sou bom em fazer quatro coisas ao mesmo tempo</del>`
    }


    var Dualcore_u = inputDualcore_u.value
    var Dualcore_a = inputDualcore_a.value
    var Dualcore_l = inputDualcore_l.value
    var Dualcore_c = inputDualcore_c.value
    var Dualcore_o = inputDualcore_o.value
    var Dualcore_r = inputDualcore_r.value
    var Dualcore_e = inputDualcore_e.value

    var dualuser = [Quadcore_d_dualcore, Dualcore_u, Dualcore_a, Dualcore_l, Dualcore_c, Dualcore_o, Dualcore_r, Dualcore_e]

    var dualCorreta = ["d", "u", "a", "l", "c", "o", "r", "e"]

    if (String(dualuser) === String(dualCorreta)) {
        inputQuadcore_d_dualcore.classList = ("inputDisabled")
        inputDualcore_u.classList = ("inputDisabled")
        inputDualcore_a.classList = ("inputDisabled")
        inputDualcore_l.classList = ("inputDisabled")
        inputDualcore_c.classList = ("inputDisabled")
        inputDualcore_o.classList = ("inputDisabled")
        inputDualcore_r.classList = ("inputDisabled")
        inputDualcore_e.classList = ("inputDisabled")

        dica8.innerHTML = `<del>8 - Dizem que sou bom em fazer duas coisas ao mesmo tempo</del>`
    }


    var Dma_m = inputDma_m.value
    var Dma_a = inputDma_a.value

    var dmauser = [MemoriaMassa_d_dma, Dma_m, Dma_a]

    var dmaCorreta = ["d", "m", "a"]

    if (String(dmauser) === String(dmaCorreta)) {
        inputMemoriaMassa_d_dma.classList = ("inputDisabled")
        inputDma_m.classList = ("inputDisabled")
        inputDma_a.classList = ("inputDisabled")

        dica6.innerHTML = `<del>6 - Permito a transição direta de dados entre periféricos e a memória principal</del>`
    }


    var Eprom_e = inputEprom_e.value
    var Eprom_p = inputEprom_p.value
    var Eprom_r_registradores = inputEprom_r_registradores.value
    var Eprom_o = inputEprom_o.value
    var Eprom_m = inputEprom_m.value

    var epromuser = [Eprom_e, Eprom_p, Eprom_r_registradores, Eprom_o, Eprom_m]

    var epromCorreta = ["e", "p", "r", "o", "m"]

    if (String(epromuser) === String(epromCorreta)) {
        inputEprom_e.classList = ("inputDisabled")
        inputEprom_p.classList = ("inputDisabled")
        inputEprom_r_registradores.classList = ("inputDisabled")
        inputEprom_o.classList = ("inputDisabled")
        inputEprom_m.classList = ("inputDisabled")

        dica4.innerHTML = `<del>4 - Mantenho meus dados mesmo sem energia e posso ser alterado</del>`
    }


    var Databus_d = inputDatabus_d.value
    var Databus_t = inputDatabus_t.value
    var Databus_a_ram = inputDatabus_a_ram.value
    var Databus_b = inputDatabus_b.value
    var Databus_u = inputDatabus_u.value
    var Databus_s = inputDatabus_s.value

    var dataBususer = [Databus_d, MemoriaMassa_a_databus, Databus_t, Databus_a_ram, Databus_b, Databus_u, Databus_s]

    var dataBusCorreta = ["d", "a", "t", "a", "b", "u", "s"]

    if (String(dataBususer) === String(dataBusCorreta)) {
        inputDatabus_d.classList = ("inputDisabled")
        inputMemoriaMassa_a_databus.classList = ("inputDisabled")
        inputDatabus_t.classList = ("inputDisabled")
        inputDatabus_a_ram.classList = ("inputDisabled")
        inputDatabus_b.classList = ("inputDisabled")
        inputDatabus_u.classList = ("inputDisabled")
        inputDatabus_s.classList = ("inputDisabled")

        dica11.innerHTML = `<del>11 - É a via elétrica usada para transferir dados entre componentes de um computador</del>`
    }


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

    var registradoresuser = [Eprom_r_registradores, Registradores_e1, Registradores_g, Registradores_i_15, Databus_s, Registradores_t, Registradores_r, Registradores_a_flash, Registradores_d, Registradores_o, Registradores_r_adressbus, Registradores_e2, Registradores_s2]

    var registradoresCorreta = ["r", "e", "g", "i", "s", "t", "r", "a", "d", "o", "r", "e", "s"]

    if (String(registradoresuser) === String(registradoresCorreta)) {
        inputEprom_r_registradores.classList = ("inputDisabled")
        inputRegistradores_e1.classList = ("inputDisabled")
        inputRegistradores_g.classList = ("inputDisabled")
        inputRegistradores_i_i5.classList = ("inputDisabled")
        inputDatabus_s.classList = ("inputDisabled")
        inputRegistradores_t.classList = ("inputDisabled")
        inputRegistradores_r.classList = ("inputDisabled")
        inputRegistradores_a_flash.classList = ("inputDisabled")
        inputRegistradores_d.classList = ("inputDisabled")
        inputRegistradores_o.classList = ("inputDisabled")
        inputRegistradores_r_adressbus.classList = ("inputDisabled")
        inputRegistradores_e2.classList = ("inputDisabled")
        inputRegistradores_s.classList = ("inputDisabled")

        dica5.innerHTML = `<del>5 - É o hipocampo da própria CPU</del>`
    }


    var i5_5 = inputI5_5.value

    var i5user = [Registradores_i_15, i5_5]

    var i5Correta = ["i", "5"]

    if (String(i5user) === String(i5Correta)) {
        inputRegistradores_i_i5.classList = ("inputDisabled")
        inputI5_5.classList = ("inputDisabled")

        dica10.innerHTML = `<del>10 - O primeiro modelo de processador da Intel que foi lançado em setembro de 2009</del>`
    }


    var Adressbus_a = inputAdressbus_a.value
    var Adressbus_d = inputAdressbus_d.value
    var Adressbus_e = inputAdressbus_e.value
    var Adressbus_s1 = inputAdressbus_s1.value
    var Adressbus_s2 = inputAdressbus_s2.value
    var Adressbus_b = inputAdressbus_b.value
    var Adressbus_u = inputAdressbus_u.value
    var Adressbus_s3 = inputAdressbus_s3.value

    var adresssuser = [Adressbus_a, Adressbus_d, Registradores_r_adressbus, Adressbus_e, Adressbus_s1, Adressbus_s2, Adressbus_b, Adressbus_u, Adressbus_s3]

    var adressCorreta = ["a", "d", "r", "e", "s", "s", "b", "u", "s"]

    if (String(adresssuser) === String(adressCorreta)) {
        inputAdressbus_a.classList = ("inputDisabled")
        inputAdressbus_d.classList = ("inputDisabled")
        inputRegistradores_r_adressbus.classList = ("inputDisabled")
        inputAdressbus_e.classList = ("inputDisabled")
        inputAdressbus_s1.classList = ("inputDisabled")
        inputAdressbus_s2.classList = ("inputDisabled")
        inputAdressbus_b.classList = ("inputDisabled")
        inputAdressbus_u.classList = ("inputDisabled")
        inputAdressbus_s3.classList = ("inputDisabled")

        dica15.innerHTML = `<del>15 - É usado pela CPU ou por um dispositivo habilitado para acesso direto à memória para localizar o endereço físico para comunicar comandos de leitura/gravação</del>`
    }


    var Flash_f = inputFlash_f.value
    var Flash_l = inputFlash_l.value
    var Flash_s = inputFlash_s.value
    var Flash_h_chip = inputFlash_h_chip.value

    var flashuser = [Flash_f, Flash_l, Registradores_a_flash, Flash_s, Flash_h_chip]

    var flashCorreta = ["f", "l", "a", "s", "h"]

    if (String(flashuser) === String(flashCorreta)) {
        inputFlash_f.classList = ("inputDisabled")
        inputFlash_l.classList = ("inputDisabled")
        inputRegistradores_a_flash.classList = ("inputDisabled")
        inputFlash_s.classList = ("inputDisabled")
        inputFlash_h_chip.classList = ("inputDisabled")

        dica13.innerHTML = `<del>13 - Mantenho meus dados mesmo sem energia, mas não posso ser alterado</del>`
    }


    var Chipselect_c = inputChipselect_c.value
    var Chipselect_i_i7 = inputChipselect_i_i7.value
    var Chipselect_p = inputChipselect_p.value
    var Chipselect_e1 = inputChipselect_e1.value
    var Chipselect_l = inputChipselect_l.value
    var Chipselect_e2 = inputChipselect_e2.value
    var Chipselect_c_cpu = inputChipselect_c_cpu.value
    var Chipselect_t = inputChipselect_t.value

    var chipsuser = [Chipselect_c, Flash_h_chip, Chipselect_i_i7, Chipselect_p, Adressbus_s1, Chipselect_e1, Chipselect_l, Chipselect_e2, Chipselect_c_cpu, Chipselect_t]

    var chipCorreta = ["c", "h", "i", "p", "s", "e", "l", "e", "c", "t"]

    if (String(chipsuser) === String(chipCorreta)) {
        inputChipselect_c.classList = ("inputDisabled")
        inputFlash_h_chip.classList = ("inputDisabled")
        inputChipselect_i_i7.classList = ("inputDisabled")
        inputChipselect_p.classList = ("inputDisabled")
        inputAdressbus_s1.classList = ("inputDisabled")
        inputChipselect_e1.classList = ("inputDisabled")
        inputChipselect_l.classList = ("inputDisabled")
        inputChipselect_e2.classList = ("inputDisabled")
        inputChipselect_c_cpu.classList = ("inputDisabled")
        inputChipselect_t.classList = ("inputDisabled")

        dica12.innerHTML = `<del>12 - Através de mim a CPU acessa a memória e/ou periféricos externos</del>`
    }


    var Cpu_p = inputCpu_p.value
    var Cpu_u = inputCpu_u.value

    var cpususer = [Chipselect_c_cpu, Cpu_p, Cpu_u]

    var cpuCorreta = ["c", "p", "u"]

    if (String(cpususer) === String(cpuCorreta)) {
        inputChipselect_c_cpu.classList = ("inputDisabled")
        inputCpu_p.classList = ("inputDisabled")
        inputCpu_u.classList = ("inputDisabled")

        dica16.innerHTML = `<del>16 - Onde tudo se processa</del>`
    }


    var I7_7 = inputI7_7.value

    var i7user = [Chipselect_i_i7, I7_7]

    var i7Correta = ["i", "7"]

    if (String(i7user) === String(i7Correta)) {
        inputChipselect_i_i7.classList = ("inputDisabled")
        inputI7_7.classList = ("inputDisabled")

        dica14.innerHTML = `<del>14 - Processador da Intel mais utilizado por gamers</del>`
    }


    var Ram_r = inputRam_r.value
    var Ram_m = inputRam_m.value

    var ramuser = [Ram_r, Databus_a_ram, Ram_m]

    var ramCorreta = ["r", "a", "m"]

    if (String(ramuser) === String(ramCorreta)) {
        inputRam_r.classList = ("inputDisabled")
        inputDatabus_a_ram.classList = ("inputDisabled")
        inputRam_m.classList = ("inputDisabled")

        dica9.innerHTML = `<del>9 - Sou o porteiro que permite o acesso aos arquivos armazenados no computador</del>`
    }

    if((String(memoriaMassaCorr) === String(memoriaMassaInput)) && (String(romuser) === String(romCorreta)) && (String(ulauser) === String(ulaCorreta)) && (String(quaduser) === String(quadCorreta)) && (String(dualuser) === String(dualCorreta)) && (String(dmauser) === String(dmaCorreta)) && (String(epromuser) === String(epromCorreta)) && (String(dataBususer) === String(dataBusCorreta)) && (String(registradoresuser) === String(registradoresCorreta)) && (String(i5user) === String(i5Correta)) && (String(adresssuser) === String(adressCorreta)) && (String(flashuser) === String(flashCorreta)) && (String(chipsuser) === String(chipCorreta)) && (String(cpususer) === String(cpuCorreta)) && (String(i7user) === String(i7Correta)) && (String(ramuser) === String(ramCorreta))){
        final.innerHTML = `<img src="img/congratulations.jpg">`
    }
}
