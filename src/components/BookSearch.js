import { useState } from 'react'
//Chakra events are imported.
import {
  Container,
  Center,
  FormControl,
  Input,
  Button,
  Text,
  HStack,
  Box,
  GridItem,
  Grid,
  Card,
  CardBody,
  Image,
  Stack,
  Heading
} from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import { Link } from "react-router-dom";
import axios from 'axios'

function BookSearch() {
  //The data returned from the api is kept in the books state.
  const [books, setBooks] = useState()
  //The data entered into the input is kept in the serchbook state.
  const [searchbook, setSearchBook] = useState('')
//When the input is handle, the value information is transferred to the searchbook.
  function handleChange(event) {
    setSearchBook(event.target.value)
  }
// When the form is submitted, a request is made to the API according to the data entered in the input
 //This returned data is transferred to the books.
  function formSubmit(event) {
    event.preventDefault()

    axios(`https://www.googleapis.com/books/v1/volumes?q=${searchbook}`)
      .then((res) => setBooks(res.data.items))
      .catch((e) => console.log(e))
  }

  return (
    <Box
      w="100%"
      h="260px"
      backgroundImage="url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80')"
    >
      <Container marginBottom={20}>
        <Center h="150px" color="white">
          <Text fontSize="6xl">Search Book</Text>
        </Center>
        <form onSubmit={formSubmit}>
          <HStack spacing="25px">
            <FormControl>
              <Box w="400px" h="25px">
                <Input
                  bg="white"
                  value={searchbook}
                  onChange={handleChange}
                  placeholder="book title or author"
                />
              </Box>
            </FormControl>
            <Box>
              <Button mt={4} colorScheme="gray" type="submit">
                <Search2Icon />
              </Button>
            </Box>
          </HStack>
        </form>
      </Container>
      <Container maxW="8xl" paddingLeft="8">
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {books &&
            books.map((book) => (
              <GridItem w="100%" key={book.id}>
                <Card h={360}>
                  <CardBody>
                    <Center>
                      <Image
                        h={200}
                        w={140}
                        src={
                          book.volumeInfo.imageLinks?.thumbnail ||
                          'https://media.istockphoto.com/id/1132987502/tr/vekt%C3%B6r/vekt%C3%B6r-ger%C3%A7ek%C3%A7i-bo%C5%9F-kitap-kapa%C4%9F%C4%B1-%C3%BCst-g%C3%B6r%C3%BCn%C3%BCm-yal%C4%B1t%C4%B1lm%C4%B1%C5%9F.jpg?s=170667a&w=0&k=20&c=o7q9Yrn1hoZmUPXvf9qssdoljtgz-zfkM2Z7Gz-nCzw='
                        }
                        alt={book.volumeInfo.title}
                        borderRadius="md"
                      />
                    </Center>
                    <Stack mt="6" spacing="3">
                      <Center>
                        <Heading size="xs">{book.volumeInfo.title}</Heading>
                      </Center>
                      <Center mt="5">
                        <Text fontSize="xs">
                          {book.volumeInfo.authors?.join(', ')}
                        </Text>
                      </Center>
                      <Center>
                      <Link  to={`book/${book.id}`} variant="link" colorScheme="blue" fontSize="xs">
                        Detail
                      </Link>
                      </Center>
                    </Stack>
                  </CardBody>
                </Card>
              </GridItem>
            ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default BookSearch
