"use client"

import Link from "next/link";
import Image from "next/image";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from 'react';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-white border-b shadow-sm relative">
            <div className="container mx-auto flex flex-col md:flex-row h-16 items-center justify-between px-4">
                <Link href="/">
                    <Image
                        src="/openschool_core/static/src/img/logo_w.png"
                        alt="EPF Logo"
                        width={100}
                        height={30}
                    />
                </Link>

                <div className="hidden md:flex items-center gap-6">

                    <Link
                        href="/"
                        className="text-base font-medium hover:text-green-500 transition-colors"
                    >
                        Início
                    </Link>

                    {/* A Escola Dropdown */}
                    
                    <DropdownMenu  >
                        <DropdownMenuTrigger className="text-base font-medium flex items-center hover:text-green-600">
                            A Escola <ChevronDown className="ml-2 h-4 w-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="">
                            <DropdownMenuLabel>A Escola</DropdownMenuLabel>
                            <DropdownMenuItem>
                                <Link href="/sobre-nos">Sobre Nós</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/autorizacao-de-funcionamento">Autorização de Funcionamento</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/autorizacao-de-funcionamento">Estatutos</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/autorizacao-de-funcionamento">Regulamento Interno</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/autorizacao-de-funcionamento">Porjeto Educativo</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/autorizacao-de-funcionamento">Política de Privacidade</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/autorizacao-de-funcionamento">Organização Escolar</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/autorizacao-de-funcionamento">Guião Educação Inclusiva</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/autorizacao-de-funcionamento">Legislação de apoio</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Formação Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger className="text-base font-medium flex items-center hover:text-green-600">
                            Formação <ChevronDown className="ml-2 h-4 w-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Formação</DropdownMenuLabel>
                            <DropdownMenuItem>
                                <Link href="/cursos-profissionais">Cursos Profissionais</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/cursos-cef">Cursos de Educação e Formação</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/cursos-cef">Outras Ofertas Formativas</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    {/* Formação Dropdown */}

                    <DropdownMenu>
                        <DropdownMenuTrigger className="text-base font-medium flex items-center hover:text-green-600">
                            Alumni e Parceiros <ChevronDown className="ml-2 h-4 w-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent >
                            <DropdownMenuLabel> Alumni e Parceiros</DropdownMenuLabel>
                            <DropdownMenuItem>
                                <Link href="/alumni">Alumni</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/parceiros">Parceiros</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/recrutamento">Recrutamento</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Link href="/" className="text-base font-medium flex items-center hover:text-green-600">Erasmus+</Link>

                    <DropdownMenu>
                        <DropdownMenuTrigger className="text-base font-medium flex items-center hover:text-green-600">
                            EQAVET <ChevronDown className="ml-2 h-4 w-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent >
                            <DropdownMenuLabel>EQAVET</DropdownMenuLabel>
                            <DropdownMenuItem>
                                <Link href="/eqavet/selo-de-conformidade">Selo de Conformidade EQAVET</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/eqavet/documento-base">Documento Base</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/eqavet/plano-de-acao">Plano de Ação</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/eqavet/relatorio-do-operador">Relatório do Operador</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/eqavet/plano-de-acao-integrado">Plano de Ação Integrado</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/eqavet/relatorio-de-verificacao">Relatório de Verificação EQAVET</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/eqavet/manual-de-processos">Manual de Processos, Procedimentos e Gestão Documental</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/eqavet/relatorios-de-acompanhamento">Relatórios de Acompanhamento</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/eqavet/relatorios-de-progresso-anual">Relatórios de Progresso Anual</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/eqavet/certificacao-2020-2023">Certificação EQAVET 2020-2023</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* ... outros itens do menu */}
                </div>
                <div className="md:hidden">
                    <button
                        className="text-gray-600 focus:outline-none"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>


                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-16 left-0 w-full bg-white z-10">
                        {/* ... (itens de menu para mobile) ... */}
                    </div>
                )}


                <div className="flex items-center gap-4">
                    <Link href="/web/login">
                        <Button className="bg-green-300 hover:bg-green-200 text-black">
                            Entrar
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
