Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 165606
Server version: 5.5.60-MariaDB MariaDB Server

Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

MariaDB [(none)]> use monitor;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
MariaDB [monitor]> select estabelecimento, loja, data_atual, rede, tipo_cartao, produto, transacao_pagamento, transacao_nsu, transacao_valor from cadastro_transacoes_tef where estabelecimento="EletroMarago", data_atual >= '2019-02-01';
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near ' data_atual >= '2019-02-01'' at line 1
MariaDB [monitor]> select estabelecimento, loja, data_atual, rede, tipo_cartao, produto, transacao_pagamento, transacao_nsu, transacao_valor from cadastro_transacoes_tef where estabelecimento="EletroMarago" and data_atual >= '2019-02-01';
+-----------------+---------+---------------------+----------+-------------+----------+---------------------+---------------+-----------------+
| estabelecimento | loja    | data_atual          | rede     | tipo_cartao | produto  | transacao_pagamento | transacao_nsu | transacao_valor |
+-----------------+---------+---------------------+----------+-------------+----------+---------------------+---------------+-----------------+
| EletroMarago    | Loja001 | 2019-02-02 10:55:53 | Redecard | Crédito     | Crédito  | Parcelado           | 347127        |          454.00 |
| EletroMarago    | Loja001 | 2019-02-06 16:32:10 | Redecard | Crédito     | Crédito  | Parcelado           | 347135        |           78.20 |
| EletroMarago    | Loja001 | 2019-02-09 12:19:40 | Redecard | Crédito     | Crédito  | Parcelado           | 347142        |          245.00 |
| EletroMarago    | Loja001 | 2019-02-12 11:22:50 | Redecard | Crédito     | Crédito  | Parcelado           | 347148        |          119.00 |
| EletroMarago    | Loja001 | 2019-02-15 14:37:17 | Redecard | Crédito     | Crédito  | Parcelado           | 347155        |          150.00 |
| EletroMarago    | Loja001 | 2019-02-16 12:36:43 | Redecard | Crédito     | Crédito  | Parcelado           | 347158        |         1608.27 |
| EletroMarago    | Loja001 | 2019-02-18 15:17:02 | Redecard | Crédito     | Crédito  | Parcelado           | 347162        |          136.00 |
| EletroMarago    | Loja001 | 2019-02-25 10:58:58 | Userede  | Crédito     | Crédito  | Parcelado           | 17            |          107.30 |
| EletroMarago    | Loja001 | 2019-03-06 16:58:58 | Userede  | Crédito     | Crédito  | Parcelado           | 33            |          733.40 |
| EletroMarago    | Loja001 | 2019-03-15 14:40:45 | Userede  | Crédito     | Crédito  | Parcelado           | 51            |          328.80 |
| EletroMarago    | Loja001 | 2019-03-18 10:53:55 | Userede  | Crédito     | Crédito  | Parcelado           | 57            |          159.80 |
| EletroMarago    | Loja001 | 2019-03-18 14:14:55 | Userede  | Débito      | Débito   | A vista             | 58            |          238.00 |
| EletroMarago    | Loja001 | 2019-04-08 09:24:26 | Userede  | Crédito     | Crédito  | Parcelado           | 2732          |         1141.00 |
| EletroMarago    | Loja001 | 2019-04-08 14:24:11 | Userede  | Débito      | Débito   | A vista             | 2733          |           30.00 |
| EletroMarago    | Loja001 | 2019-04-09 11:36:12 | Userede  | Crédito     | Crédito  | Parcelado           | 2738          |          450.00 |
| EletroMarago    | Loja001 | 2019-04-09 11:36:59 | Userede  | Crédito     | Crédito  | Parcelado           | 2739          |          343.50 |
| EletroMarago    | Loja001 | 2019-04-09 16:54:38 | Userede  | Crédito     | Crédito  | Parcelado           | 2740          |          817.85 |
| EletroMarago    | Loja001 | 2019-04-10 17:24:40 | Userede  | Crédito     | Crédito  | Parcelado           | 2743          |         1516.07 |
| EletroMarago    | Loja001 | 2019-04-11 08:39:16 | Userede  | Crédito     | Crédito  | A vista             | 2746          |          120.00 |
| EletroMarago    | Loja001 | 2019-04-11 15:27:46 | Userede  | Crédito     | Crédito  | A vista             | 2747          |          117.00 |
| EletroMarago    | Loja001 | 2019-04-12 17:41:39 | Userede  | Crédito     | Crédito  | Parcelado           | 2750          |          159.80 |
| EletroMarago    | Loja001 | 2019-04-18 15:05:40 | Userede  | Crédito     | Crédito  | Parcelado           | 2762          |          159.80 |
| EletroMarago    | Loja001 | 2019-04-18 17:36:52 | Userede  | Crédito     | Crédito  | Parcelado           | 2763          |          265.20 |
| EletroMarago    | Loja001 | 2019-04-20 08:48:50 | Userede  | Crédito     | Crédito  | Parcelado           | 2767          |          390.00 |
| EletroMarago    | Loja001 | 2019-04-22 10:04:21 | Userede  | Crédito     | Crédito  | A vista             | 2771          |           49.28 |
| EletroMarago    | Loja001 | 2019-04-22 14:10:58 | Userede  | Crédito     | Crédito  | Parcelado           | 2772          |          114.40 |
| EletroMarago    | Loja001 | 2019-04-25 16:07:57 | Userede  | Crédito     | Crédito  | Parcelado           | 2782          |          200.00 |
| EletroMarago    | Loja001 | 2019-04-26 11:07:57 | Userede  | Crédito     | Crédito  | Parcelado           | 2785          |          114.40 |
| EletroMarago    | Loja001 | 2019-05-03 09:07:15 | Userede  | Crédito     | Crédito  | Parcelado           | 2798          |          241.05 |
| EletroMarago    | Loja001 | 2019-05-03 11:15:45 | Userede  | Crédito     | Crédito  | Parcelado           | 2799          |           92.67 |
| EletroMarago    | Loja001 | 2019-05-06 11:32:52 | Userede  | Crédito     | Crédito  | Parcelado           | 2805          |         1046.45 |
| EletroMarago    | Loja001 | 2019-05-07 15:29:54 | Userede  | Crédito     | Crédito  | Parcelado           | 3794          |           32.30 |
| EletroMarago    | Loja001 | 2019-05-11 08:45:35 | Userede  | Crédito     | Crédito  | Parcelado           | 3802          |           62.88 |
| EletroMarago    | Loja001 | 2019-05-11 09:37:03 | Userede  | Débito      | Débito   | A vista             | 3803          |           58.00 |
+-----------------+---------+---------------------+----------+-------------+----------+---------------------+---------------+-----------------+
34 rows in set (1 min 34.95 sec)

MariaDB [monitor]> quit
