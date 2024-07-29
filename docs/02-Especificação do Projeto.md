# Especificações do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr>
<th colspan="2">Perfil 1: Usuários Administradores</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">
Usuários autorizados a remover, adicionar e editar o livro de receitas da família. Também possuem a permissão para tornar outros membros administradores de seu livro de receitas, também podendo escolher se o livro é apenas acessível a um grupo restrito de pessoas ou se é aberto ao público.
</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
  <ol>
 <li>Editar, remover e adicionar receitas ao livro de receitas;</li>
 <li>Editar, remover e adicionar participantes ao livro de receitas;</li>
 <li>Gerenciar os privilégios dos membros que participam do livro de receitas;</li>
 <li>Gerenciar a visibilidade do livro de receitas.</li>
  </ol>
</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr>
<th colspan="2"> Perfil 1: Usuários Comuns </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">
Usuários que possuem permissão apenas para visualizar receitas. Também podem comentar e dar notas para as receitas que possuem acesso.
</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
<ol>
<li>Ler as receitas, privadas e/ou públicas, que foram compartilhadas com o seu perfil;</li>
<li>Procurar por receitas do seu interesse;</li>
<li>Comentar suas experiências e opiniões sobre as receitas;</li>
<li>Avaliar com uma nota de um à cinco sua satisfação com a receita;</li>
<li>Curtir receitas;</li>
</ol>
</td>
</tr>
</tbody>
</table>

## Histórias de Usuário

Com base na análise das personas foram identificados as seguintes histórias de usuário: 

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`                                             |PARA ... `MOTIVO/VALOR`                 |
|--------------------|--------------------------------------------------------------------------------|----------------------------------------|
|Usuário Administrador / Praticante| Cadastrar um perfil que possua meus dados | Acessar e compartilhar informações.
|Usuário Administrador | Editar, remover e adicionar receitas ao meu livro de receitas  | Controlar e corrigir o conteúdo que eu e meu grupo compartilhamos. |
|Usuário Administrador | Editar, remover e adicionar participantes ao meu livro de receitas | Controlar e filtrar o acesso às receitas que pertencem a mim e à minha família.
|Usuário Administrador | Gerenciar os privilégios dos membros que participam do meu livro de receitas | Ter maior controle sob as mudanças impostas por terceiros.
!Usuário Administrador | Gerenciar a visibilidade do meu livro de receitas | Poder decidir quem tem a permissão de visualizar as informações compartilhadas.
|Usuário Comum | Ler as receitas, privadas e/ou públicas, que foram compartilhadas com o meu perfil | Aprender e/ou reproduzir a receita posteriormente.|
|Usuário Comum | Procurar por receitas do meu interesse | Filtrar a receita que mais se adequa à minha necessidade.
|Usuário Comum | Comentar minhas experiências e opiniões sobre as receitas | Compartilhar meu feedback com o restante da rede.
|Usuário Comum | Avaliar com uma nota de um à cinco sua satisfação com a receita | Auxiliar na tomada de decisão de outros usuários.
Usuário Comum | Curtir receitas | Demonstrar minha satisfação e salvar a receita para visitas futuras.
Usuário Comum | Acessar receitas curtidas| Acessar com mais facilidade receitas que eu já aprovei.

## Requisitos

### Requisitos Funcionais

| ID   | Descrição do Requisito                                                                                              | Prioridade |
|------|---------------------------------------------------------------------------------------------------------------------|------------|
| RF-01| A aplicação deve permitir que o usuário cadastre-se e faça login.                                                  | ALTA       |
| RF-02| A aplicação deve permitir a adição, remoção e alteração de receitas pelo(s) seu(s) administrador(es).            | ALTA       |
| RF-03| A aplicação deve permitir a adição, remoção e alteração de membros participantes do livro de receitas.             | ALTA       |
| RF-04| A aplicação deve permitir ao(s) administrador(es) o gerenciamento de privilégios dos membros participantes.         | ALTA       |
| RF-05| A aplicação deve permitir a alteração da visibilidade do livro de receitas pelo(s) seu(s) administrador(es).       | ALTA       |
| RF-06| A aplicação deve permitir ao usuário ler as receitas, privadas e/ou públicas, compartilhadas com seu perfil.      | MÉDIA      |
| RF-07| A aplicação deve permitir os usuários filtrar receitas do seu interesse por nome da receita, nome do livro, autor. | ALTA       |
| RF-08| A aplicação deve permitir aos usuários comentarem suas experiências e opiniões sobre as receitas.                 | MÉDIA      |
| RF-09| A aplicação deve permitir avaliar com uma nota de um a cinco sua satisfação com a receita.                        | BAIXA      |
| RF-10| A aplicação deve permitir que o usuário dê curtidas em receitas.                                                   | BAIXA      |
| RF-11| A aplicação deve permitir que o usuário acesse suas receitas curtidas.                                            | BAIXA      |



**Prioridade: Alta / Média / Baixa. 

### Requisitos Não Funcionais

| ID     | Descrição do Requisito                                                                                                                            | Prioridade |
|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| RNF-01   | A aplicação deve ser responsiva, para que os elementos do projeto se adaptem a diferentes resoluções de desktops e smartphones.                    | ALTA       |
| RNF-02 | A aplicação deve garantir que o site seja intuitivo proporcionando uma experiência eficiente para os usuários.                                 | ALTA       |
| RNF-03 | A aplicação deve ser compatível com os principais navegadores web como o Google Chrome, Firefox e Microsoft Edge.                               | ALTA       |
| RNF-04 | A aplicação deve garantir que a plataforma esteja disponível 24/7 com tempo de inatividade para manutenção programada de 10 horas semanais.    | MÉDIA      |
| RNF-05 | A aplicação deve permitir a criação de uma senha.                                                                                               | ALTA       |



**Prioridade: Alta / Média / Baixa.
