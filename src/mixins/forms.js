export default {
    data() {
        return {
            forms: {
                form1: {
                    head: {
                        title1: { text: 'Полное наименование акционера/участника', rowspan: 2 },
                        title2: { text: 'Местонахождение акционера/участника', rowspan: 2 },
                        title3: { text: 'Телефон, факс, e-mail', rowspan: 2 },
                        title4: { text: 'ФИО руководителя исполнительного органа акционера/участника', rowspan: 2 },
                        title5: {
                            text: 'Сведения о наличии лицензии акционера/участника торгов фондовой биржи',
                            colspan: 3
                        },
                        title6: { text: 'Вид деятельности', rowspan: 2 },
                        title7: { text: 'Дата вступления в акционеры/Участники торгов фондовой биржи', rowspan: 2 },
                        title8: { text: 'Статус', rowspan: 2 },
                    },
                    head2: {
                        title1: 'Номер лицензии',
                        title2: 'Орган, выдавший лицензию',
                        title3: 'Дата выдачи'
                    },
                    body: {
                        count: 10
                    }
                },

                form2: {
                    head: {
                        title1: { text: 'Наименование эмитента', rowspan: 2 },
                        title2: { text: 'Категория (уровень) листинга', rowspan: 2 },
                        title3: { text: 'Вид ценной бумаги', rowspan: 2 },
                        title4: { text: 'Номер государственной регистрации ценной бумаги', rowspan: 2 },
                        title5: { text: 'Дата государственной регистрации ценной бумаги', rowspan: 2 },
                        title6: { text: 'Наименование органа, осуществившего государственную регистрацию', rowspan: 2 },
                        title7: { text: 'Дата включения в листинг фондовой биржи', rowspan: 2 },
                        title8: { text: 'Сокращенное наименование/код ценной бумаги', rowspan: 2 },
                        title9: { text: 'Номинал ценной бумаги', rowspan: 2 }
                    },
                    body: {
                        count: 9
                    }
                },

                form3: {
                    head: {
                        title1: { text: 'Вид ценной бумаги', rowspan: 2 },
                        title2: { text: 'Номер государственной регистрации ценных бумаг', rowspan: 2 },
                        title3: { text: 'Дата государственной регистрации ценных бумаг', rowspan: 2 },
                        title4: { text: 'Наименование органа, осуществившего государственную регистрацию', rowspan: 2 },
                        title5: { text: 'Дата включения в листинг фондовой биржи', rowspan: 2 },
                        title6: { text: 'Категория (уровень) листинга исключенной ценной бумаги', rowspan: 2 },
                        title7: { text: 'Дата исключения из листинга фондовой биржи', rowspan: 2 },
                        title8: { text: 'Номинал ценной бумаги', rowspan: 2 },
                        title9: { text: 'Причины исключения из листинга фондовой биржи', rowspan: 2 }
                    },
                    body: {
                        count:9
                    }
                },

                form4: {
                    head: {
                        title1: { text: 'Полное наименование участника торгов', rowspan: 2 },
                        title2: { text: 'Юридический адрес участника торгов', rowspan: 2 },
                        title3: { text: 'Телефон, факс, e-mail', rowspan: 2 },
                        title4: { text: 'ФИО руководителя исполнительного органа', rowspan: 2 },
                        title5: { text: 'ИНН участника торгов', rowspan: 2 },
                        title6: {
                            text: 'Сведения о лицензии участника торгов',
                            colspan: 3
                        },
                        title7: {
                            text: 'Сведения об уполномоченных трейдерах участника торгов',
                            colspan: 3
                        },
                        title8: { text: 'Дата допуска участника к торгам', rowspan: 2 },
                        title9: { text: 'Информация о принятых фондовой биржей дисциплинарных мерах по приостановлению участия участника торгов в торгах или об исключении из состава участников', rowspan: 2 },
                    },
                    head2: {
                        title1: '№ лицензии',
                        title2: 'Орган, выдавший лицензию',
                        title3: 'Дата выдачи, № лицензии'
                    },
                    head3: {
                        title1: 'ФИО уполномоченного трейдера',
                        title2: 'Дата и № выдачи квалификационного свидетельства',
                        title3: 'Присвоенная квалификация',
                    },
                    body: {
                        count: 13
                    }
                },

                form5: {
                    head: {
                        title1: { text: 'Число/месяц/год', rowspan: 2 },
                        title2: { text: 'Полное наименование участника торгов', rowspan: 2 },
                        title3: { text: 'Всего совершено сделок через торговую систему фондовой биржи', rowspan: 2 },
                        title4: { text: 'Количество ценных бумаг', rowspan: 2 },
                        title5: {
                            text: 'Общая сумма сделок (сом.)',
                            colspan: 3
                        },
                    },
                    head2: {
                        title1: 'размещение',
                        title2: 'обращение',
                        title3: 'всего',
                    },
                    body: {
                        count: 7
                    }
                },

                form6: {
                    head: {
                        title1: { text: 'Дата', rowspan: 2 },
                        title2: { text: 'Эмитент ценных бумаг и вид ценных бумаг', rowspan: 2 },
                        title3: { text: 'Государственный регистрационный номер', rowspan: 2 },
                        title4: { text: 'Номер сделки', rowspan: 2 },
                        title5: { text: 'Покупатель', rowspan: 2 },
                        title6: { text: 'Продавец', rowspan: 2 },
                        title7: {
                            text: 'Количество ценных бумаг (шт.)',
                            colspan: 2
                        },
                        title8: {
                            text: 'Цена за 1 ценную бумагу (сом.)',
                            colspan: 2
                        },
                        title9: {
                            text: 'Объем сделки',
                            colspan: 2
                        },
                        title10: { text: 'Нелистинг/листинг (категория/уровень листинга)', rowspan: 2 },
                    },
                    head1: {
                        title1: 'первичный рынок',
                        title2: 'вторичный рынок',
                    },
                    head2: {
                        title1: 'первичный рынок',
                        title2: 'вторичный рынок',
                    },
                    head3: {
                        title1: 'первичный рынок',
                        title2: 'вторичный рынок',
                    },
                    body: {
                        count: 13
                    }
                },

                form7: {
                    head: {
                        title1: { text: 'Наименование ценной бумаги', rowspan: 2 },
                        title2: { text: 'Дата', rowspan: 2 },
                        title3: { text: 'Государственный регистрационный номер', rowspan: 2 },
                        title4: { text: 'Количество сделок', rowspan: 2 },
                        title5: { text: 'Количество ценных бумаг (шт.)', rowspan: 2 },
                        title6: {
                            text: 'Цена ценной бумаги (сом.)',
                            colspan: 3
                        },
                        title7: { text: 'Объем сделки (сом.)', rowspan: 2 },
                    },
                    head2: {
                        title1: 'max. цена',
                        title2: 'min. цена',
                        title3: 'средняя цена',
                    },
                    body: {
                        count: 9
                    }
                },

                form8: {
                    head: {
                        title1: { text: 'Наименование эмитента, общее количество ценных бумаг в выпуске', rowspan: 2 },
                        title2: { text: 'Место нахождения', rowspan: 2 },
                        title3: { text: 'Государственный регистрационный номер', rowspan: 2 },
                        title4: { text: 'Код ценной бумаги', rowspan: 2 },
                        title5: { text: 'Вид ценной бумаги', rowspan: 2 },
                        title6: { text: 'Вид деятельности', rowspan: 2 },
                        title7: { text: 'Рыночная цена (сом.)', rowspan: 2 },
                        title8: { text: 'Листинг/нелистинг', rowspan: 2 },
                    },
                    body: {
                        count: 8
                    }
                },

                form9: {
                    head: {
                        title1: { text: 'Код ценной бумаги', rowspan: 2 },
                        title2: { text: 'Количество ценных бумаг', rowspan: 2 },
                        title3: { text: 'Покупка (сом.)', rowspan: 2 },
                        title4: { text: 'Продажа (сом.)', rowspan: 2 },
                        title5: { text: 'Дата, время', rowspan: 2 },
                    },
                    body: {
                        count: 5
                    }
                },

                form10: {
                    head: {
                        title1: { text: 'Дата расчета индекса', rowspan: 2 },
                        title2: { text: 'Значение индекса (пунктов)', rowspan: 2 },
                        title3: { text: 'Изменения индекса по сравнению с индексом предыдущего торгового дня (в %)', rowspan: 2 },
                    },
                    body: {
                        count: 3
                    }
                },

                // form11: {
                //     head: {
                //         title1: { text: 'Наименование показателя', rowspan: 2},
                //         title2: { text: 'Значение показателя', rowspan: 2 },
                //     },
                //     body:{
                //     names: {
                //         title1: 'К1 (собственный капитал)',
                //         title2: 'К2 (отношение привлеченных средств к собственному капиталу)',
                //         title3: 'К3 (эффективность деятельности организации)',
                //         title4: 'К5 (совокупные обязательства)',
                //     },
                //         count: 1
                //     }
                // },

                // form12: {
                //     head: {
                //         title1: { text: 'Наименование показателя' },
                //         title2: { text: 'Значение показателя' }
                //     },
                //     head1:{
                //         title0: 'Уставный капитал',
                //         title1: 'Коэффициент текущей ликвидности',
                //         title2: 'Коэффициент достаточности собственных средств',
                //     }
                // }
            }
        }
    }
}